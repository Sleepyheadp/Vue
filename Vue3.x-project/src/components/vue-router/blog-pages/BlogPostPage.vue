<template>
    <div>
        <h2>{{ blogPost.title }}</h2>
        <p>{{ blogPost.body }}</p>
        <router-link to="/blogList">回到列表页</router-link>
    </div>
</template>

<script>
import { getBlogPostsById } from "../../../data/blogPosts";
export default {
    data() {
        return {
            blogPost: {}
        }
    },
    created() {
        this.blogPost = getBlogPostsById(this.$route.params.postId)
    }
}
</script>
<style scoped></style>