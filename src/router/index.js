import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import group from "./group"
import audio from "./audio"
import broadcast from "./broadcast"
import mine from "./mine"
import home from "./home"
const routes = [
  {path:"",redirect:"/home"},
  home,audio,broadcast,mine,group
]

const router = new VueRouter({
  routes
})

export default router
