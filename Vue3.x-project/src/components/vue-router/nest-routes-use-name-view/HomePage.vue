<template>
  <nav class="globalNav">
    <router-link to="/login">登录</router-link>
    <!-- <ButtonLink to="/blogs">博客管理</ButtonLink> -->
    <!-- <PrivateLink to="/blogs">博客管理</PrivateLink> -->
    <button @click="redirectToManagementPage">博客管理</button>
  </nav>
</template>
<script>
import ButtonLink from '../../../components/vue-router/package-router-link/ButtonLink.vue'
import PrivateLink from '../../../components/vue-router/package-router-link/PrivateLink.vue'
import { isNavigationFailure, NavigationFailureType } from 'vue-router'
export default {
  components: { ButtonLink, PrivateLink },
  methods: {
    async redirectToManagementPage() {
      const failure = await this.$router.push('/blogs')
      console.log(failure);
      console.log(isNavigationFailure(failure));
      console.log(isNavigationFailure(failure, NavigationFailureType.aborted));
      console.log(failure.from, failure.to);
      // 用户提示操作
      alert('请先登陆')
    }
  }
}
</script>
<style scoped>
.globalNav {
  height: 200px;
  align-self: start;
  justify-self: center;
  padding: 24px;
}

.globalNav a {
  padding: 12px;
}
</style>
