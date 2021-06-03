<template>
    <div class="container">
        
        <h3>게시판</h3>
        
        <table class="uk-table uk-table-small uk-table-divider">
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>글쓴이</th>
                    <th>좋아요</th>
                    <th>댓글</th>
                    <th>날짜</th>
                </tr>
            </thead>
            <tbody v-for="(item, index) in posts" v-bind:key="item.id">
                <tr>
                    <td>{{ item.po_no }}</td>
                    <td> <router-link :to="{name:'BoardView', params:{id: item.po_no}}">{{ item.po_subject }}</router-link></td>
                    <td>{{ item.mb_id }}</td>
                    <td>{{ item.cnt_like }}</td>
                    <td>{{ item.cnt_reply }}</td>
                    <td>{{ item.po_regdate }}</td>
                </tr>
            </tbody>
        </table>

        <router-link to="/bbs_write">글쓰기</router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
            posts:[],
            postDetail:[],
            page:0,
            busy: false,
            itemNum: '',
            limit: 12
        }
    },
    created() {
        this.loadMore()
    },
    methods: {
        loadMore(){

            //document.getElementById('itemRoading').style.display = 'block';

            this.http.post('/listBoard/bbs_post', '{page: 1}')
            .then((response) => {
                this.itemNum = response.data.meta.pages;
            });

            var pagenum = this.page;
            if(this.page > this.itemNum){
                this.busy = false;
                return;
            }else{
                this.busy = true;
                pagenum = this.page + 1;
            }

            this.page = pagenum;
            
            let form = new FormData() 
            form.append('page', pagenum);
            form.append('limit', this.limit);

            this.http.post('/listBoard/bbs_post', form)
            .then((response) => {

                //document.getElementById('itemRoading').style.display = 'none';

                const listData = response.data.data;
                this.posts = this.posts.concat(listData);
                this.busy = false;
                this.itemNum = response.data.meta.pages;

                console.log(listData);

            })
            .catch((error) => {
                console.log(error);
            });

            

        },

        onClick(id){
            let form = new FormData() 
            form.append('po_no', id) 

            http.post('/getPost', form ,{
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',}
            })
            .then((res) => {
                this.postDetail = res.data;
            })
            .catch((error) => {
                console.log(error);
            });
        },

        goPage(id){
            this.$router.push('/post/'+id);
        }
    },
}
</script>

<style scope>
tbody td { text-align: left; }
</style>