<template>
  <div id="app">
    <HeaderComponent/>
    <div class="container">
    <router-view/>
    </div>
    <FooterComponent/>
    <PostWrite/>
  </div>
</template>

<script>
import HeaderComponent from './components/Header'
import FooterComponent from './components/Footer'
import PostWrite from './components/PostWrite'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    PostWrite
  },
  methods: {
  }
}
</script>

<style>
/* uikit css */
@import '../node_modules/uikit/dist/css/uikit.min.css';
/* custom css */
@import 'assets/css/style.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
