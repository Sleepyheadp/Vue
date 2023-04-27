<template>
  <nav class="globalNav">
    <router-link to="/login">登录</router-link>
    <!-- <ButtonLink to="/blogs">博客管理</ButtonLink> -->
    <PrivateLink to="/blogs">博客管理</PrivateLink>
  </nav>
</template>
<script>
import ButtonLink from '../../../components/vue-router/package-router-link/ButtonLink.vue'
import PrivateLink from '../../../components/vue-router/package-router-link/PrivateLink.vue'
export default {
  components: { ButtonLink, PrivateLink }
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
