<script setup lang="ts">

import { ref, type Ref } from 'vue'

// 1、ref 自动类型推断
const num = ref(0)
// 2、使用Ref类型
const str: Ref<string> = ref('str')
// 3、使用泛型
const bool = ref<boolean>(true)

console.log(num.value, str.value, bool.value);

</script>

<template>
  <p>hello vue3.x+ts</p>
</template>

<style scoped></style>
