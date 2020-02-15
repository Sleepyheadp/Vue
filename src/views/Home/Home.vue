<template>
    <div class="home">
      <Tabbar></Tabbar>
      <banner></banner>
      <div class="navbar" :class="{fixedTop:isFixed}">
        <span
          v-for = "nav in navs"
          :key="nav.id"
          :class="{active:type===nav.type}"
          @click="type=nav.type"
        >{{nav.title}}</span>
      </div>
      <div :class="{fixbox:isFixed}">
        <MovieBox :type="type"></MovieBox>
      </div>
    </div>
</template>    

<script>
//引入底部Tabbar
import Tabbar from "@/components/Tabbar"
//引入轮播图banner
import Banner from "../../components/Banner"
// import Banner from "@/components/Banner"  与上一行的效果相同

import MovieBox from "./MovieBox"
export default {
  name:"home",
  components:{
    Tabbar,Banner,MovieBox
  },
  data(){
    return {
      type:"in_theaters",
      navs:[
        {id:1,title:"正在热映",type:"in_theaters"},
        {id:2,title:"即将上映",type:"coming_soon"}
      ],
      isFixed:false
    }
  },
  methods:{
    handleEvent(e){
      let sTop = document.documentElement.scrollTop || document.body.scrollTop;
      console.log("1111111111111")
      if(sTop >= 270 && !this.isFixed){
        this.isFixed = true;
      }else if(sTop<270 && this.isFixed){
        this.isFixed = false;
      }
    }
  },
  activated(){
    window.addEventListener("scroll",this.handleEvent)
  },
  deactivated(){
    window.removeEventListener("scroll",this.handleEvent)
    this.isFixed = false;
  },
  created(){
    
  }
}
</script>  

<style lang="scss">
  .home{
      padding-bottom:60px;
      .fixbox{
        margin-top:52px;
      }
      .navbar{
          position: relative;
          width:100%;
          height:50px;
          background: #fff;
          display: flex;
          justify-content: space-around;
          align-items: center;
          &.fixedTop{
            position:fixed;
            top:0;
            left:0;
            width:100%;
            margin-top:0;
          }
          span{
              transition: all 1s;
              position: relative;
              &::after{
                  content:"";
                  width:40px;
                  height:3px;
                  position: absolute;
                  left:50%;
                  margin-left:-20px;
                  bottom:-10px;
                  background: transparent;
                  transition: all 1s;
              }
          }
          .active{
              color:orange;
              &::after{
                  background: orange
              }
          }
      }
  }
</style>