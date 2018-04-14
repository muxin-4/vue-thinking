import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/index.vue'
import Money from '@/page/money/index.vue'
import Ious from '@/page/ious/index.vue'
import '../css/reset.scss'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/money',
      name: 'money',
      component: Money
    },
    {
      path: '/ious',
      name: 'ious',
      component: Ious
    },
  ]
})
