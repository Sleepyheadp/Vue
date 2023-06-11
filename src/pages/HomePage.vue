<template>
    <div>
        <!-- 列表容器 -->
        <PostList>
            <!-- 每个帖子结构 -->
            <PostItem v-for="(n, index) in 10" :key="index"></PostItem>
        </PostList>
        <TheUpload v-if="$store.state.showUpload" />
    </div>
</template>

<script setup>
// 头像组件
import TheAvatar from '../components/TheAvatar.vue';
import PostActions from '../components/PostActions.vue'
import PostList from '../components/PostList.vue'
import PostItem from '../components/PostItem.vue'
import PostDetails from '../components/PostDetails.vue'
import TheUpload from '../components/TheUpload.vue'
import { useStore } from 'vuex'
const store = useStore()
</script>
<style scoped></style>