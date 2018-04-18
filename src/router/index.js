import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/page/home/index.vue'
// import Money from '@/page/money/index.vue'
// import Ious from '@/page/ious/index.vue'
// import Account from '@/page/account/index.vue'
// import Download from '../specail/download.vue'
import '../css/reset.scss'
import '../css/config.scss'
import BaseRouter from '@/router/base'

Vue.use(Router)

const router = new Router({
  routes: [
    ...BaseRouter
  ]
})


export default router
