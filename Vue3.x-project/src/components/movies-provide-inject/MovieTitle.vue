<template>
  <h2>{{ title }}</h2>
</template>
<script>
export default {
  // 获取祖先元素定义的数据，直接可以使用
  inject: ['title']
};
</script>
<style scoped>
h2 {
  color: hsl(240deg, 100%, 80%);
}
</style>
