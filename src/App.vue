<template>
  <div id="app">
    <!--将一级路由渲染到页面上,并且进行数据的缓存-->
    <keep-alive include="home">
      <router-view></router-view>
    </keep-alive>
    <Header></Header>
  </div>
</template>

<style lang="scss">
  .swiper-pagination-bullet-active{
    background:#d9d2d2!important
  }
</style>

<script>
import Header from "@/components/Header"
export default {
  components:{
    Header
  }
}
</script>>
