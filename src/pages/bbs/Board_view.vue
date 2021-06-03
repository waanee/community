<template>
    <div class="container">

        <div v-for="(item, index) in postDetail" v-bind:key="postDetail.id">

            <article class="uk-article" >

                <h1 class="uk-article-title"><a class="uk-link-reset" href="">{{ item.po_subject }}</a></h1>

                <p class="uk-article-meta">Written by <a href="#">{{ item.mb_id }}</a> on {{ item.po_regdate }}. </p>

                <p class="uk-text-lead">{{ item.po_contents }}</p>

            </article>

        </div>

    </div>
</template>

<script>
export default {
    computed: {
        isAuthenticated2(){
            if(this.$store.getters.isAuthenticated != 'undefined')
            return this.$store.getters.isAuthenticated
        }
    },
    data(){
        return{
            postDetail:[],
            po_id:'',
            po_rp_contents:'',
            po_rp_status:'Y',
            postReply:[]
        }
    },
    created() {

        let form = new FormData() 
        form.append('po_no', this.$route.params.id) 

        this.http.post('/getBoard/bbs_post', form ,{
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                }
            })
            .then((response) => {
                this.postDetail = response.data;
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

            //setInterval(function(){
                this.comment();
                //var objDiv = document.getElementsByClassName('modal');
                //objDiv.scrollTo = objDiv.scrollHeight;
            //}.bind(this), 1000);
        
    },
    
    methods: {
        comment(){
            let form = new FormData() 
            form.append('po_no', this.$route.params.id)
            
            this.http.post('/listPostReply', form ,{
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                    }
                })
                .then((response) => {
                    this.postReply = response.data.data;
                    
                })
                .catch((error) => {
                    console.log(error);
                });
                console.log('comment!!');
        },
        // 포스트 삭제
        deletePost(){
            let form = new FormData() 
            form.append('po_no', this.$route.params.id) 
            form.append('mb_token', this.$store.getters.isAuthenticated);

            this.http.post('/deletePost', form)
            .then((data) => {
                this.data = data.data;
                console.log(this.data);
                alert('글이 삭제되었습니다.');
                //router.push({ name: 'index'})
                //this.$router.go('/');
                this.$router.push('/feed')
            })
            .catch((error) => {
                console.log(error);
            });
        },
        // 댓글 정보 
        replyRe(){
            let form = new FormData() 
            form.append('po_no', this.$route.params.id) 
            this.http.post('/listPostReply', form ,{
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                }
            })
            .then((response) => {
                console.log(response.data);
                this.postReply = response.data.data;
                console.log(this.postReply);
            })
            .catch((error) => {
                console.log(error);
            });
        },
        // 댓글 쓰기
        addComment(reply){
            let form = new FormData() 
            form.append('mb_token', this.$store.getters.isAuthenticated);
            form.append('po_no', this.$route.params.id);
            form.append('po_id', this.po_id);
            form.append('po_rp_contents', this.po_rp_contents);
            form.append('po_rp_status', this.po_rp_status);

            if(reply){
                let getNo = document.getElementById('two-btn').getAttribute('data-id');
                //alert(getNo);
                form.append('po_rp2_no', getNo);
            } 

            if(!this.po_rp_contents) {
                alert('입력된 내용이 없습니다.'); 
                return;
            }

            
            this.http.post('/updatePostReply', form)
            .then((data) => {
                this.data = data.data;
                console.log(this.data);
                //alert('댓글이 등록 되었습니다.');
                this.replyRe();
                //router.push({ name: 'community'})
            })
            .catch((error) => {
                console.log(error);
            });
        },
        delComment(id){
            let form = new FormData() 
            form.append('po_rp_no', id);
            form.append('mb_token', this.$store.getters.isAuthenticated);

            this.http.post('/delPostReply', form)
                .then((data) => {
                    this.data = data;
                    if(this.data.data.status == '1'){
                        alert('댓글이 삭제 되었습니다.');
                        this.replyRe();
                    }else{
                        alert(this.data.data.msg);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        onchangeSubmit(e){
            alert(e);
            document.getElementById('one').style.display = "none";
            document.getElementById('two').style.display = "block";
            document.getElementById('two-btn').setAttribute('data-id', e);
        },
    }
}
</script>