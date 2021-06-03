import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'

import TestPage from '@/components/TestPage'
import AboutPage from '@/pages/About'
import JoinPage from '@/pages/Join'
import LoginPage from '@/pages/login'
import JoinSuccess from '@/pages/JoinSuccess'
import FeedPage from '@/pages/Feed'
import PostPage from '@/pages/Post'

// Board page
import BoardList from '@/pages/bbs/Board_list'
import BoardView from '@/pages/bbs/Board_view'
import BoardWrite from '@/pages/bbs/Board_write'

// kakaoMap 
import MapPage from '@/pages/Map'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'TestPage',
      component: TestPage
    },
    {
      path: '/feed',
      name: 'FeedPage',
      component: FeedPage
    },
    {
      path: '/post/:id',
      name: 'PostPage',
      component: PostPage
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '/join',
      name: 'JoinPage',
      component: JoinPage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/joinsuccess',
      name: 'JoinSuccess',
      component: JoinSuccess
    },
    // board
    {
      path: '/bbs',
      name: 'BoardList',
      component: BoardList
    },
    {
      path: '/bbs/:id',
      name: 'BoardView',
      component: BoardView
    },
    {
      path: '/bbs_write',
      name: 'BoardWrite',
      component: BoardWrite
    },
    // map
    {
      path: '/map',
      name: 'MapPage',
      component: MapPage
    }
  ]
})
