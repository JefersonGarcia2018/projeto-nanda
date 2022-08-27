import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/DominioUm',
    name: 'DominioUm',
    // route level code-splitting
    // this generates a separate chunk (DominioUm.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DominioUm" */ '../views/DominioUm.vue')
  },
  {
    path: '/DominioDois',
    name: 'DominioDois',
    // route level code-splitting
    // this generates a separate chunk (DominioDois.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DominioDois" */ '../views/DominioDois.vue')
  },
  {
    path: '/DominioTres',
    name: 'DominioTres',
    // route level code-splitting
    // this generates a separate chunk (DominioTres.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DominioTres" */ '../views/DominioTres.vue')
  },
  {
    path: '/DominioQuatro',
    name: 'DominioQuatro',
    // route level code-splitting
    // this generates a separate chunk (DominioQuatro.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DominioQuatro" */ '../views/DominioQuatro.vue')
  },
  {
    path: '/DominioCinco',
    name: 'DominioCinco',
    // route level code-splitting
    // this generates a separate chunk (DominioCinco.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DominioCinco" */ '../views/DominioCinco.vue')
  },
  {
    path: '/DominioSeis',
    name: 'DominioSeis',
    // route level code-splitting
    // this generates a separate chunk (DominioSeis.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DominioSeis" */ '../views/DominioSeis.vue')
  },
  {
    path: '/DominioSete',
    name: 'DominioSete',
    // route level code-splitting
    // this generates a separate chunk (DominioSete.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DominioSete" */ '../views/DominioSete.vue')
  },
  {
    path: '/DominioOito',
    name: 'DominioOito',
    // route level code-splitting
    // this generates a separate chunk (DominioOito.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DominioOito" */ '../views/DominioOito.vue')
  },
  {
    path: '/DominioNove',
    name: 'DominioNove',
    // route level code-splitting
    // this generates a separate chunk (DominioNove.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DominioNove" */ '../views/DominioNove.vue')
  },
  {
    path: '/DominioDez',
    name: 'DominioDez',
    // route level code-splitting
    // this generates a separate chunk (DominioDez.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DominioDez" */ '../views/DominioDez.vue')
  },
  {
    path: '/DominioOnze',
    name: 'DominioOnze',
    // route level code-splitting
    // this generates a separate chunk (DominioOnze.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DominioOnze" */ '../views/DominioOnze.vue')
  },
  {
    path: '/DominioDoze',
    name: 'DominioDoze',
    // route level code-splitting
    // this generates a separate chunk (DominioDoze.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DominioDoze" */ '../views/DominioDoze.vue')
  },
  {
    path: '/DominioTreze',
    name: 'DominioTreze',
    // route level code-splitting
    // this generates a separate chunk (DominioTreze.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DominioTreze" */ '../views/DominioTreze.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
