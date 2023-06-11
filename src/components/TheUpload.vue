<template>
    <TheModal @close="store.commit('changeUpload', false)">
        <div class="postUpload">
            <label class="upload" for="">
                <img 
                    alt="" 
                    v-if="imageObjUrl" 
                    :src="imageObjUrl" 
                    class="preview"
                >
                <TheIcon v-else icon="upload-image" />
                <input 
                    type="file" 
                    accept="image/*" 
                    class="fileChooser" 
                    @change="handleImageUpload"
                />
            </label>
            <div class="postContent">
                <textarea v-model="description" placeholder="写点什么吧..." class="postContentInput"></textarea>
                <TheButton class="pubBtn" @click="publishPost">发布</TheButton>
            </div>
        </div>
    </TheModal>
</template>

<script setup>
import TheModal from "./TheModal.vue";
import TheIcon from "./TheIcon.vue";
import TheButton from "./TheButton.vue";

import { useStore } from "vuex";
import { ref } from "vue";

const store = useStore();
const imageObjUrl = ref('');

// 上传的图片url及描述
const image = ref(null);
const description = ref('');

// 预览图片（主要是预览
async function handleImageUpload(e) {
    // 默认允许上传一张图片
    console.log('handleImageUpload', e.target);
    const imageFile = e.target.files[0];
    if (imageFile) {
        // 设置预览
        imageObjUrl.value = URL.createObjectURL(imageFile);
        // 设置图片文件
        image.value = imageFile;
    }
}
// 发布图片
function publishPost() {
    store.dispatch('uploadPost', {
        image: image.value,
        description: description.value
    })
}
</script>
<style scoped>
.postUpload {
    width: 50vw;
    height: 70vh;
    display: grid;
    grid-template-rows: 4fr 1fr;
}

.preview {
    width: 100%;
    height: 100%;
    object-fit: cover;
    min-height: 0;
}

.upload {
    display: grid;
    place-items: center;
    cursor: pointer;
    min-height: 0;
    padding: 75px;
}

.upload>svg {
    width: 254px;
    height: 316px;
}

.fileChooser {
    opacity: 0;
    position: absolute;
    width: 300px;
    height: 300px;
}

.postContent {
    display: grid;
}

.postContentInput {
    border-bottom: none;
    resize: none;
    padding: 12px 24px;
}

.postContentInput::placeholder {
    color: #757575;
}

.pubBtn {
    align-self: end;
    justify-self: end;
    position: relative;
    right: 24px;
    bottom: 18px;
}
</style>