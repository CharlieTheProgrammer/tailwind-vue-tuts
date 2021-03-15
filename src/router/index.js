import Vue from 'vue'
import VueRouter from 'vue-router'
import Inbox from "@/components/Inbox.vue";
import Descript from "@/components/Descript.vue";
import Dropdown from "@/components/Dropdown.vue";

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'App',
  //   component: App
  // },
  {
    path: '/inbox',
    name: 'Inbox',
    component: Inbox
  },
  {
    path: '/dropdown',
    name: 'Dropdown',
    component: Dropdown
  },
  {
    path: '/descript',
    name: 'Descript',
    component: Descript
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
