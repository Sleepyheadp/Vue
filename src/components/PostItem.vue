<template>
    <!-- 首页展示列表项 -->
    <div>
        <div class="postItem">
            <img 
                :src="post.image" 
                alt="" 
                width="100%" 
                height="100%" 
                style="background: #eee;"
                @click="commentsClick"
            >
            <div class="postInfo">
                <!-- 帖子信息 -->
                <div class="postMeta">
                    <TheAvatar :src="post?.user?.avatar" />
                    <span>{{ post?.user?.name }}</span>
                    <span class="postPubDate">
                        {{ dateToRelative(post.publishedAt) }}
                    </span>
                    <PostActions 
                        :likes="post.liked_bies" 
                        :comments="post.comments" 
                        :favors="post.favored_bies" 
                        :likedByMe="post.likedByMe" 
                        :favoredByMe="post.favoredByMe"
                        @likeClick="likeClick"
                        @favorClick = 'favorClick'
                        @commentsClick="commentsClick"
                    />
                </div>
                <!-- 帖子描述 -->
                <div class="postDesc">
                    <p>{{ post.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import TheAvatar from '../components/TheAvatar.vue';
import PostActions from '../components/PostActions.vue'

import { useStore } from 'vuex'

// 时间处理
import { dateToRelative } from '../utils/date'

const props = defineProps({
    // 帖子数据
    post: {
        type: Object,
        default: {}
    }
})
// 点赞收藏
const store = useStore()
const likeClick = () => {
    store.dispatch('toggleLike', props.post.id)
}
const favorClick = () => {
    store.dispatch('toggleFavor', props.post.id)
}
// 点击评论
const commentsClick = () => {
    store.dispatch('showPostDetails', props.post.id)
}
</script>
<style scoped>
.postItem {
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
}

.postInfo {
    padding: 24px;
}

.postItem>img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    background: #eee;
    cursor: pointer;
}

.postMeta {
    display: grid;
    grid-template-areas:
        "avatar name actions"
        "pubDate pubDate actions";
    grid-template-columns: 42px 1fr 3fr;
    row-gap: 6px;
}

.postMeta .avatar {
    grid-area: avatar;
}

.postMeta .postPubDate {
    grid-area: pubDate;
    color: #9f9f9f;
    font-size: 14px;
}

.postActions {
    grid-area: actions;
    justify-self: end;
}

/* .postActions {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    column-gap: 16px;
    row-gap: 4px;
} */

.postDesc {
    margin-top: 28px;
    white-space: pre-line;
}
</style>