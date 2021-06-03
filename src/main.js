// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import 'es6-promise/auto' // vuex 의 promise를 es6에서 사용하기 위해 추가
var infiniteScroll = require ( 'vue-infinite-scroll');

// 부트스트랩
// require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
// require('../node_modules/bootstrap/dist/js/bootstrap.min');

// uikit framework 사용. 사용 안할시, 주석처리 해 주세요.
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons)

Vue.use(Vuex)
Vue.use (infiniteScroll)
Vue.config.productionTip = false

// 서버통신을 위한 axios 기본설정.
const http = axios.create({
  baseURL: 'https://dev1.waanee.com/index.php/api', // API URL에 맞게 주소세팅.
  timeout: 1000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }
});

Vue.prototype.http = http

// vuex store 상태 관리 (로그인)
const enhanceAccessToeken = () => {
  const {mb_token} = localStorage
  if (!mb_token) return
  axios.defaults.headers.common['Authorization'] = `Bearer ${mb_token}`;
}
enhanceAccessToeken();

const store = new Vuex.Store({
  state: {
      mb_token: null
  },
  getters: {
      isAuthenticated (state) {
        state.mb_token = state.mb_token || localStorage.mb_token
        return state.mb_token
      }
    },
    mutations: {
      LOGIN (state, {mb_token}) {
        state.mb_token = mb_token
        localStorage.mb_token = mb_token
        //alert('로그인 되었습니다!');
        //UIkit.modal.dialog('<p class="uk-modal-body">회원로그인 되었습니다!</p>');
      },
      LOGOUT (state) {
        state.mb_token = null
        delete localStorage.mb_token
        //UIkit.modal.dialog('<p class="uk-modal-body">로그아웃 되었습니다!</p>');
      }
    },
    actions: {
      LOGIN ({commit}, {id, password, mb_type}) {
      //console.log(mb_type);
        let form = new FormData() 
        form.append('mb_id', id) 
        form.append('mb_password',password)
        //form.append('mb_type',mb_type)

        return http.post('/login', form)
          .then(({data}) => {
            
            if(data.status == -2){
              alert('회원정보가 바르지 않습니다. 다시 로그인 해주세요.')
              //UIkit.modal.dialog('<p class="uk-modal-body">회원 정보가 바르지 않습니다. 다시 로그인 해주세요!</p>');
              return;
            }else if(data.status == 0){
              alert(data.msg);
              return;
            }else{ 
              alert('회원 로그인 되었습니다.')
              //UIkit.modal('#login').hide();
            }

            commit('LOGIN', data.data)
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.data.mb_token}`
            
          })
      },
      LOGOUT ({commit}) {
        axios.defaults.headers.common['Authorization'] = undefined
        commit('LOGOUT')
        alert('로그아웃 되었습니다.')
      },
    }
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store,
})

// jquery custom js
require('../src/assets/js/custom.js')
