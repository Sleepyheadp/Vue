<template>
    <div>
        <!-- 列表容器 -->
        <PostList>
            <!-- 每个帖子结构 -->
            <PostItem v-for="(n, index) in 10" :key="index">
                <img src="" alt="" width="100%" height="100%" style="background: #eee;">
                <div class="postInfo">
                    <!-- 帖子信息 -->
                    <div class="postMeta">
                        <TheAvatar />
                        <span>张三</span>
                        <span class="postPubDate">12小时之前发布</span>
                        <PostActions />
                    </div>
                    <!-- 帖子描述 -->
                    <div class="postDesc">
                        <p>
                            这是一棵树，这是一棵树，这是一棵树，这是一棵树，这是一棵树，这是一棵树，这是一棵树，这是一棵树。
                        </p>
                    </div>
                </div>
            </PostItem>
        </PostList>
        <TheAvatar />
        <TheUpload />
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
</script>
<style scoped></style>