<template>
  <!-- vue2.x要求template模版中必须有一个根元素 -->
  <div id="root">
    <!-- <Home></Home> -->
    <!-- <CompositionApiMain></CompositionApiMain> -->
    <!-- <List></List> -->
    <!-- <TransitionComp></TransitionComp> -->
    <VueRouter></VueRouter>
  </div>
</template>
<script setup>
import { Transition } from 'vue'
import Home from "./page/home.vue"
import CompositionApiMain from './page/CompositionApiMain.vue'
import List from './page/list.vue'
import TransitionComp from './page/TransitionComp.vue'
import VueRouter from './page/vueRouter/index.vue'
</script>
<style scoped></style>
