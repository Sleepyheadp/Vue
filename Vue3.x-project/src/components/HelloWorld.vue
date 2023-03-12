<script>
// Vue3.x的写法
// <script setup>
// defineProps({
//   msg: String,
//   default: 'Vite + Vue3.x'
// }, {
//   version: Number,
//   default: 3,
//   validator(val) {
//     return val > 2
//   }
// })

export default {
  props: {
    msg: {
      type: String,
      default: 'Vite + Vue2.x'
    },
    version: {
      // 传参类型
      type: Number,
      // 参数默认值
      default: 2,
      // 添加传参时的验证条件。当val == 2时接收参数
      // 一般不在传参时做逻辑处理吧？
      validator(val) {
        return val == 2
      }
    }
  }
}

</script>

<template>
  <p>hello {{ msg }} {{ version }}</p>
</template>

<style scoped></style>
