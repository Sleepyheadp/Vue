<template>
    <div>
        <!-- 列表容器 -->
        <PostList>
            <!-- 每个帖子结构 -->
            <PostItem v-for="post in posts" :key="post" :post="post"></PostItem>
        </PostList>
        <TheUpload v-if="showUpload" />
        <PostDetails v-if="showDetails"/>
    </div>
</template>

<script setup>
// 头像组件
import PostList from '../components/PostList.vue'
import PostItem from '../components/PostItem.vue'
import PostDetails from '../components/PostDetails.vue'
import TheUpload from '../components/TheUpload.vue'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
const store = useStore()
const showUpload = computed(() => store.state.showUpload)
const showDetails = computed(() => store.state.showDetails)
const posts = computed(() => store.state.post.list)
onMounted(() => {
    store.dispatch('loadAllPosts')
})
</script>
<style scoped></style>