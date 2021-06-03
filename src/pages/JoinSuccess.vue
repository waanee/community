<template>
    <div>

        Join
        <p>
            축하합니다. 회원가입 되었습니다. 
            <br>
            회원로그인 후 이용 하실 수 있습니다.
            <br>
            <input class="uk-button uk-button-primary" type="button" value="Login" @click="login">
        </p>

    </div>
</template>

<script>
export default ({
    name:'JoinSuccess',
    data(){
        return{
        }
    },
    
    methods: {
        login() {
        //   const {search} = window.location
        //   const tokens = search.replace(/^\?/, '').split('&')
        //   const {returnPath} = tokens.reduce((qs, tkn) => {
        //     const pair = tkn.split('=')
        //     qs[pair[0]] = decodeURIComponent(pair[1])
        //     console.log(qs);
        //     return qs
        //   }, {})
          this.$router.push('/login')
        }
      }
})
</script>


<style scoped>

</style>