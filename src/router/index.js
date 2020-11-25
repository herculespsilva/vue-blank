import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ola/:nome', //prop que esta em Alo.vue em script
    name: 'ola',
    component: () => import('../views/Alo.vue'),
    props: true,
    beforeEnter: (to, from, next) => {
      if (from.name !== 'About') {
        next()
      } else {
        next(false)
      }
    }
  },
  {
    path: '/trabalho',
    name: 'Trabalho',
    component: () => import('../views/Trabalho.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
    if (store.state.permiteNavegacao) {
        next()
    } else {
        next(false)
    }
})

export default router