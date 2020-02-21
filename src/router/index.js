import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import group from "./group"
import audio from "./audio"
import broadcast from "./broadcast"
import mine from "./mine"
import home from "./home"
import notfound from "./notfound"
import moviedetail from "./moviedetail"
import moviedetailActor from "./moviedetailActor"
const routes = [
  {path:"",redirect:"/mine"},
  home,audio,broadcast,mine,group,notfound,moviedetail,moviedetailActor,
  {path:"*",redirect:"/notfound"}
]

const router = new VueRouter({
  routes
})

export default router
