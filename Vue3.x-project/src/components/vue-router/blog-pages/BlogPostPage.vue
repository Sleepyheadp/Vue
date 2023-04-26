<template>
    <div>
        <h2>{{ blogPost.title }}</h2>
        <p>{{ blogPost.body }}</p>
        <router-link to="/blogList">回到列表页</router-link>
        <router-link :to="`/${blogPost.id - 10}`">上一篇</router-link>
        <router-link :to="`/${blogPost.id + 10}`">下一篇</router-link>
    </div>
</template>

<script>
import { getBlogPostById } from "../../../data/blogPosts";
export default {
    data() {
        return {
            blogPost: {}
        }
    },
    // created() {
    //     this.blogPost = getBlogPostById(this.$route.params.postId)
    // },
    watch: {
        "$route.params": {
            handler(params, oldParams) {
                this.blogPost = getBlogPostById(params.postId);
            },
            immediate: true,
        },
    },
}
</script>
<style scoped></style>