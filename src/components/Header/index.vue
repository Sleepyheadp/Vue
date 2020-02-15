<template>
  <div class="app-header" v-show="isShow">
      <div class="left">
        <i :class="['fa','fa-' + icon]"></i>
        <span>{{title}}</span>
      </div>
      <div class="right">
        <span>城市</span>
      </div>
  </div>
</template>

<script>
import router from "@/router"
export default {
  data(){
    return {
      icon:"home",
      title:"首页",
      isShow:true
    }
  },
  watch:{
    $route(val){
      this.changeRoute(val)
    }
  },
  methods:{
    changeRoute(to){
      switch(to.name){
        case "home":
          this.icon = "home",
          this.title = "首页",
          this.isShow = true;
        break;
        case "audio":
          this.icon = "music",
          this.title = "书影音",
          this.isShow = true;
        break;
        case "broadcast":
          this.icon = "audio-description",
          this.title = "广播",
          this.isShow = true;
        break;
        case "group":
          this.icon = "users",
          this.title = "分组",
          this.isShow = true;
        break;
        case "mine":
          this.icon = "user-o",
          this.title = "我的",
          this.isShow = true;
        break;
        default:
          this.isShow = false;
          break;
      }
    }
  },
  created(){
    //执行全局前置路由守卫
    router.beforeEach((to,from,next)=>{
      this.changeRoute(to)
      next()
    })
  }
}
</script>

<style lang="scss">
  .app-header{
    // width:3.75rem;
    width:100%;
    height:50px;
    line-height: 50px;
    background: rgba(0,0,0,0.6);  
    color:#fff;  
    display: flex;
    justify-content: space-between; 
    padding: 0 .2rem; 
    position:absolute;
    left:0;
    top:0;
    z-index:10;
    i{
      padding-right:6px;
    }  
  }
</style>