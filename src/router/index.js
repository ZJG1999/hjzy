import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }, {
    path: '/wode',
    name: 'wode',
    component: () => import('../views/wode.vue')
  }, {
    path: '/remen',
    name: 'remen',
    component: () => import('../views/remen.vue')
  }, {
    path: '/tuijian',
    name: 'tuijian',
    component: () => import('../views/tuijian.vue')
  }, {
    path: '/sousuo',
    name: 'sousuo',
    component: () => import('../views/sousuo.vue')
  },{
    path: '/bofang',
    name: 'bofang',
    component: () => import('../views/bofang.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
