<template>
  <ul>
    <AppListItem v-for="(item, index) in number" :key="index">{{ item }}</AppListItem>
  </ul>
</template>
<script>
import AppListItem from "./AppListItem.vue";
export default {
  props: ["number"],
  components: {
    AppListItem,
  },
  mounted() {
    // 主动抛出异常
    throw new Error('发生了异常')
  },
};
</script>
<style scoped></style>
