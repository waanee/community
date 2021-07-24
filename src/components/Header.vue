<template>
    <header uk-sticky="">
        <nav class="uk-navbar-container container header" uk-navbar>
            <div class="uk-navbar-left" id="asdasd">
                <!-- logo -->
                <span uk-icon="icon: home; ratio: 1.1" class="header-left-icon" ></span> 
            </div>
            <div class="uk-navbar-center mobile-hide">
                <!-- <ul class="uk-navbar-nav">
                    <li><router-link to="/">HOME</router-link></li>
                    <li><router-link to="/bbs">COMMUNITY</router-link></li>
                    <li><router-link to="/about">ABOUT</router-link></li>
                </ul> -->
                
                <div class="uk-margin searchbox">
                    <div class="uk-inline">
                        <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: search"></span>
                        <input class="uk-input" type="text" placeholder="SEARCH..">
                    </div>
                </div>

            </div>
            <div class="uk-navbar-right">
                
                <span v-if="isAuthenticated2">
                    <span uk-icon="icon: sign-out; ratio: 1.1" class="header-right-icon" @click.prevent="onClickLogout"></span>
                </span>
                
                <span v-else>
                    <span uk-icon="icon: user; ratio: 1.1" @click.prevent="goLogin" class="header-right-icon" ></span>
                </span>
                <span uk-icon="icon: pencil; ratio: 1.1" v-if="isAuthenticated2" uk-toggle="target: #modal" class="header-right-icon" ></span>
            
                <span uk-icon="icon: grid; ratio: 1.1" class="header-right-icon" uk-toggle="target: #offcanvas-slide" ></span>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  computed: {
        isAuthenticated2(){
            if(this.$store.getters.isAuthenticated != 'undefined')
            return this.$store.getters.isAuthenticated
        }
    },
    methods: {
        onClickLogout(){
            // 로그아웃 변이 실행후 리다이렉트
            this.$store.dispatch('LOGOUT').then(() => this.$router.push('/'))
        },

        goLogin(){
            this.$router.push('/login')
        }
    }
}



</script>

<style>

</style>
