<template>
  <div id="app">
    <!--将一级路由渲染到页面上-->
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<style lang="scss">

</style>

<script>
import Tabbar from "./components/Tabbar"
export default {
  components:{
    Tabbar
  }
}
</script>>
