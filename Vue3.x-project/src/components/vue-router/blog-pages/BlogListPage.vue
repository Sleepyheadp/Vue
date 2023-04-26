<template>
    <div>
        <div v-for="blogPost in blogPosts" :key="blogPost.id">
            <router-link :to="`/${blogPost.id}`" class="title">{{ blogPost.title }}</router-link>
            <div class="body">{{ blogPost.body }}</div>
        </div>
        <!-- 浏览器地址栏输入：/blogList/name=Capoo&age=18 -->
        <p>query:{{ $route.query }}</p>
        <!-- query:{ "name": "Capoo", "age": "18" } -->
    </div>
</template>

<script>
import { getAllPosts } from "../../../data/blogPosts"
export default {
    data() {
        return {
            blogPosts: []
        }
    },
    created() {
        this.blogPosts = getAllPosts()
    }
}
</script>
<style scoped></style>