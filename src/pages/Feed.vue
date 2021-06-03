<template>
    <div>
        <div class="uk-child-width-1-3@l uk-child-width-1-3@m uk-child-width-1-1" uk-grid style="padding:10px 0px;"
                v-infinite-scroll="loadMore" 
                infinite-scroll-disabled="busy" infinity-scroll-distance="limit"
                uk-grid="masonry: true"
                 > 

            <div v-for="(item, index) in posts" v-bind:key="item.id" >                
                <div class="uk-card uk-card-default">
                
                    <div class="uk-card-media-top uk-cover-container" v-if="item.po_files">
                        <img v-bind:src="item.img.files_url" class="border-round" alt="" @click="goPage(item.po_no)">
                        
                    </div>
                    
                    <div>
                        <div class="uk-card-footer">
                            <router-link :to="{name:'PostPage', params:{id: item.po_no}}" class="uk-button uk-button-text">{{ item.po_subject }}</router-link>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name:'FeedPage',
    data(){
        return{
            posts:[],
            postDetail:[],
            page:0,
            busy: false,
            itemNum: '',
            limit: 5
        }
    },
    methods: {
        loadMore(){

            //document.getElementById('itemRoading').style.display = 'block';

            this.http.post('/listPost/community', '{page: 1}')
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

            this.http.post('/listPost/community', form)
            .then((response) => {

                //document.getElementById('itemRoading').style.display = 'none';

                const listData = response.data.data;
                this.posts = this.posts.concat(listData);
                this.busy = false;
                this.itemNum = response.data.meta.pages;

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