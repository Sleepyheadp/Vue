<template>
  <!-- vue2.x要求template模版中必须有一个根元素 -->
  <div id="root">
    <!-- <Home></Home> -->
    <!-- <CompositionApiMain></CompositionApiMain> -->
    <List></List>
  </div>
</template>
<script>
import Home from "./page/home.vue"
import CompositionApiMain from './page/CompositionApiMain.vue'
import List from './page/list.vue'
export default {
  components: { Home, CompositionApiMain, List },
}
</script>
<style scoped></style>
