/**
 * @Author: wgy<wgy952046097@gmail.com>
 * @Id:  / 2018-04-18 23:03
 * @Description:
 */
import Home from '@/page/home/index.vue'
import Money from '@/page/money/index.vue'
import Ious from '@/page/ious/index.vue'
import Account from '@/page/account/index.vue'
import Download from '../specail/download.vue'


export default [
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
  {
    path: '/account',
    name: 'account',
    component: Account
  },
  {
    path: '/download',
    name: 'download',
    component: Download
  }
]
