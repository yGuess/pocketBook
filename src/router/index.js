import Vue from 'vue'
import Router from 'vue-router'
import PocketBook from '../page/pocketBook/index.vue'
import SetUp from '../page/setUp/index.vue'
import Account from '../page/account/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'pocketBook', component: PocketBook},
    {path: '/setUp', name: 'setUp', component: SetUp},
    {path: '/account', name: 'account', component: Account}
  ]
})
