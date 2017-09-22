import Vue from 'vue'
import Router from 'vue-router'
import PocketBook from '../page/pocketBook/index.vue'
import SetUp from '../page/setUp/index.vue'
import Account from '../page/account/index.vue'
import AcountDetail from '../page/account/acountDetail.vue'
import Detail from '../page/account/detail.vue'
import PocketList from '../page/pocketBook/pocketList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'pocketBook', component: PocketBook},
    {path: '/setUp', name: 'setUp', component: SetUp},
    {path: '/account', name: 'account', component: Account},
    {path: '/account/acountDetail', name: 'acountDetail', component: AcountDetail},
    {path: '/account/detail', name: 'detail', component: Detail},
    {path: '/pocketBook/pocketList', name: 'pocketList', component: PocketList}
  ]
})
