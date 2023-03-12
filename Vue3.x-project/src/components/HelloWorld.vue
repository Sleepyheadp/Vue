<script>
// <script setup>
import { ref } from 'vue'

// defineProps({
//   msg: String,
//   default:'Vite + Vue3.x'
// })

export default {
  props: {
    msg: String,
    default: 'Vite + Vue2.x'
  }
}

</script>

<template>
  <p>hello {{ msg }}</p>
</template>

<style scoped></style>
