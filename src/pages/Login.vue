<template>
    <div>

        Login
        <p>
            로그인 후 이용 하실 수 있습니다. 
        </p>

        <form>
            <fieldset class="uk-fieldset">

                <div v-if="isAuthenticated2">
                    이미 로그인 했습니다.
                </div>

                <div v-else>
                    <form action="/" @submit.prevent="onSubmit(id, password, mb_type)">
                    <fieldset class="uk-fieldset">
                    <div class="uk-margin">
                        <input class="uk-input" v-model="id" type="text" placeholder="USER ID">
                    </div>
                    <div class="uk-margin">
                        <input class="uk-input" v-model="password" type="password" placeholder="PASSWORD">
                    </div>
                    <p class="uk-text-right">
                    <input class="uk-button uk-button-primary" type="submit" value="Login">
                    </p>
                    </fieldset>
                    </form>

                    <router-link to="/join">회원가입</router-link>
                </div>
                

            </fieldset>
        </form>


    </div>
</template>

<script>
export default ({
    name:'Login',
    data(){
        return{
            id:'',
            password: '',
            mb_type:'APP',
            msg: ''
        }
    },
    computed: {
        isAuthenticated2(){
            if(this.$store.getters.isAuthenticated != 'undefined')
            return this.$store.getters.isAuthenticated
        }
    },
    methods: {
        onSubmit(id, password, mb_type) {
          //console.log('id = '+id+'/ PW = '+password)
          this.$store.dispatch('LOGIN', {id, password, mb_type})
            .then(() => this.redirect())
            .catch(({message}) => this.msg = message);
  
            //console.log(1);
        },
        redirect() {
          const {search} = window.location
          const tokens = search.replace(/^\?/, '').split('&')
          const {returnPath} = tokens.reduce((qs, tkn) => {
            const pair = tkn.split('=')
            qs[pair[0]] = decodeURIComponent(pair[1])
            //console.log(qs);
            return qs
          }, {})
          this.$router.push('/')
        }
      }
})
</script>


<style scoped>

</style>