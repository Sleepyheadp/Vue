<template>
    <div>
        <h2 clsss="title">{{ term }}</h2>
        <!-- 列表容器 -->
        <PostList>
            <!-- 每个帖子结构 -->
            <PostItem v-for="post in searchResult" :post="post" :key="post"></PostItem>
        </PostList>
    </div>
</template>

<script setup>
import PostList from '../components/PostList.vue'
import PostItem from '../components/PostItem.vue'
import { computed } from 'vue'
import { useStore } from "vuex"
import { useRoute } from 'vue-router'

const store = useStore()
const route = useRoute()

const searchResult = computed(() => store.state.post.searchResult);
const term = computed(() => route.params.term);

</script>
<style scoped>
.title {
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 44px;
}
</style>