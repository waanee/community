<template>
    <header uk-sticky="show-on-up: true; animation: uk-animation-slide-top">
        <nav class="uk-navbar-container header" uk-navbar>
            <div class="uk-navbar-left" id="asdasd">
                BaseAPP
            </div>
            <div class="uk-navbar-center mobile-hide">
                <ul class="uk-navbar-nav">
                    <li><router-link to="/">HOME</router-link></li>
                    <li><router-link to="/feed">FEED</router-link></li>
                    <li><router-link to="/bbs">BOARD</router-link></li>
                    <li v-if="isAuthenticated2"><a href="#" @click="onClickLogout">LOGOUT</a></li>
                    <li v-else><router-link to="/login">LOGIN</router-link></li>
                    <li ><router-link to="/join">JOIN</router-link></li>
                    <li><router-link to="/about">ABOUT</router-link></li>
                </ul>
            </div>
            <div class="uk-navbar-right">
                <span v-if="isAuthenticated2">
                    <span uk-icon="icon: sign-out" class="header-right-icon" @click.prevent="onClickLogout"></span>
                </span>
                
                <span v-else>
                    <span uk-icon="icon: user" @click.prevent="goLogin" class="header-right-icon" ></span>
                </span>
                <span uk-icon="icon: pencil" v-if="isAuthenticated2" uk-toggle="target: #modal" class="header-right-icon" ></span>
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
