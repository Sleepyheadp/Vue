<template>
  <li>{{ msg }}<button @click="$emit('remove', id)">删除</button></li>
</template>
<script>
export default {
  props: ["msg", 'id'],
  emits: ['remove'],
  setup() {
    // function removeMessage(id) {
    //   console.log('删除消息', id);
    // }
    // return { removeMessage }
  }
};
</script>
<style scoped>
li {
  display: flex;
  align-items: center;
  gap: 12px;
}

li::before {
  content: "";
  display: block;
  width: 8px;
  height: 8px;
  background-color: hsl(280deg, 100%, 70%);
  border-radius: 100%;
}
</style>
