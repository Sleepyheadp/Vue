<template>
    <!-- 列表容器 -->
    <div class="postList">
        <slot></slot>
    </div>
</template>

<script setup>
</script>
<style scoped>
.postList {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
}
</style>