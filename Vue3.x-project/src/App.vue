<script>
import Home from "./page/home.vue"
export default {
  components: { Home }
}
</script>

<template>
  <!-- vue2.x要求template模版中必须有一个根元素 -->
  <div id="root">
    <Home></Home>
  </div>
</template>

<style scoped></style>
