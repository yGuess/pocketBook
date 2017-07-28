import Vue from 'vue'
import Router from 'vue-router'
import addRecord from '../components/addRecord'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/addRecord',
      name: 'addRecord',
      component: addRecord
    }
  ]
})
