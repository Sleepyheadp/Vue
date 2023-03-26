<template>
  <div class="card">
    <MovieItem :description="movie.description" />
  </div>
</template>
<script>
import MovieItem from "./MovieItem.vue";
import { provide } from 'vue'
export default {
  components: {
    MovieItem,
  },
  // data() {
  //   return {
  //     movie: {
  //       title: "电影",
  //       description: "这是一段电影的描述",
  //     },
  //   };
  // },
  // 定义向下传递的数据 vue2.x
  // provide() {
  //   return { title: this.movie.title }
  // },
  // 定义向下传递的数据 vue3.x
  setup() {
    const movie = {
      title: '电影-inject直接获取',
      description: '这是一段电影的描述-vue3.x-setup'
    }
    provide("title", movie.title)
    return { movie }
  }
};
</script>
<style scoped>
.card {
  padding: 12px;
  border: 1px solid hsl(240deg, 100%, 80%);
  border-radius: 4px;
}
</style>
