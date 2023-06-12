<template>
    <div>
        <h2 class="title">编辑个人资料</h2>
        <div class="changeAvatar">
            <TheAvatar :src="profileData.avatar" />
            <TheButton>更换头像</TheButton>
            <input type="file" class="inputFile" @change="uploadAvatar">
        </div>
        <form class="profileForm" action="" @submit.prevent='updateUser'>
            <label for="username">用户名</label>
            <input type="text" v-model="profileData.username"/>
            <label for="name">昵称</label>
            <input type="text" v-model="profileData.name" />
            <label for="intro">简介</label>
            <textarea name="" id="" cols="" rows="12" v-model="profileData.intro"></textarea>
            <label for="mobilePhone">手机号：</label>
            <input type="text" v-model="profileData.mobilePhone" />
            <label for="">性别</label>
            <div class="genderRadios">
                <input v-model="profileData.gender" type="radio" name="gender" id="M" value="M" />男
                <input v-model="profileData.gender" type="radio" name="gender" id="F" vvalue="F" />女
            </div>
            <label for="website">网站</label>
            <input type="text" v-model="profileData.website" />
            <div class="actions">
                <TheButton 
                    type="reset" 
                    reverse
                    @click="$router.push('/profile')"
                >
                    取消
                </TheButton>
                <TheButton type="submit">确认</TheButton>
            </div>
        </form>
    </div>
</template>

<script setup>
import TheAvatar from '../components/TheAvatar.vue'
import TheButton from '../components/TheButton.vue'

import { computed, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore();
const router = useRouter();

import { uploadFile } from '../apis/file'

// 获取当前用户的信息
const user = computed(() => store.state.user.user)
const profileData = reactive({
    avatar: user.value.avatar,
    username: user.value.username,
    name: user.value.name,
    intro: user.value.intro,
    mobilePhone: user.value.mobilePhone,
    gender: user.value.gender,
    website: user.value.website,
})
//更换头像
async function uploadAvatar(e) {
    const file = e.target.files[0];
    // 上传图片后调用的接口返回的url，然后在更改完个人信息后统一提交
    const url = await uploadFile(file);
    profileData.avatar = url;
}
// 修改个人信息
async function updateUser() {
    await store.dispatch('updateUser', profileData)
    router.push('/profile')
}
</script>
<style scoped>
.title {
    margin-bottom: 42px;
    font-size: 24px;
    font-weight: 600;
}

.changeAvatar {
    display: flex;
    align-items: center;
    position: relative;
}

.changeAvatar .button {
    margin-left: 26px;
}

.inputFile {
    opacity: 0;
    position: absolute;
    cursor: pointer;
    top: 0;
    bottom: 0;
}

.profileForm {
    display: grid;
    grid-template-columns: max-content 1fr;
    row-gap: 32px;
    column-gap: 10px;
    margin-top: 38px;
}

.profileForm>label {
    grid-column: 1 / 2;
    justify-self: end;
    position: relative;
    top: 6px;
}

.profileForm .actions {
    grid-column: 1 / 3;
    justify-self: end;
    display: flex;
    gap: 16px;
}
</style>