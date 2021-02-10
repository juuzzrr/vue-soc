import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../views/Profile.vue'
import Pr from '../views/Pr.vue'
import Card from '../views/Card.vue'
import Home from '../views/Home.vue'
import Log from '../views/Log.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/acc/:id',
    name: 'acc',
    component: Profile
  },
  {
    path: '/acc',
    name: 'Pr',
    component: Pr
  },
  {
    path: '/acc',
    name: 'card',
    component: Card
  },
  {
    path: '/log',
    name: 'log',
    component: Log
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  path: "/profile/:profile_id", component: Profile
})

export default router
