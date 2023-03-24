<script>
import Home from "./page/home.vue"
import CompositionApiMain from './page/CompositionApiMain.vue'
export default {
  components: { Home, CompositionApiMain }
}
</script>

<template>
  <!-- vue2.x要求template模版中必须有一个根元素 -->
  <div id="root">
    <!-- <Home></Home> -->
    <CompositionApiMain></CompositionApiMain>
  </div>
</template>

<style scoped></style>
