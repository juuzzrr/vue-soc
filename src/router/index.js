import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../views/Profile.vue'
import Home from '../views/Home.vue'
import AddFriend from '../views/AddFriend.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:id',
    name: 'acc',
    component: Profile
  },
  {
    path: '/addfr',
    component: AddFriend
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  path: "/profile/:profile_id", component: Profile
})

export default router
