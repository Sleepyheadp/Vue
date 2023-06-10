<template>
    <!-- 首页展示列表项 -->
    <div>
        <div class="postItem">
            <img src="" alt="" width="100%" height="100%" style="background: #eee;">
            <div class="postInfo">
                <!-- 帖子信息 -->
                <div class="postMeta">
                    <!-- <img src="" alt="" class="avator"> -->
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
        </div>
    </div>
</template>

<script setup>
import TheAvatar from '../components/TheAvatar.vue';
import PostActions from '../components/PostActions.vue'
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