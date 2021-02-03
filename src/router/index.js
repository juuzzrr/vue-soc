import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../components/Profile.vue'
import Card from '../components/Card.vue'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/acc/',
    name: 'acc',
    component: Profile
  },
  {
    path: '/acc/:id',
    name: 'card',
    component: Card
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  path: "/profile/:profile_id", component: Profile
})

export default router
