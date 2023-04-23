<template>
    <div class="container">
        <Transition name="fade" mode="out-in">
            <div v-if="box === 'box1'" class="box box1">box1</div>
            <div v-else-if="box === 'box2'" class="box box2">box2</div>
            <div v-else class="box box3">box3</div>
        </Transition>
    </div>
</template>

<script setup>
import { ref, computed, Transition } from 'vue'
const boxes = ['box1', 'box2', 'box3'];// 静态
const current = ref(0) // 动态
const box = computed(() => boxes[current.value])
setInterval(() => {
    current.value = (current.value + 1) % boxes.length;
}, 1500);
</script>
<style scoped>
.container {
    display: grid;
    height: 200px;
}

.box {
    width: 100px;
    height: 100px;
    padding: 0.5em 1.4em;
    border-radius: 4px;
    color: white;
    /* 方法二 */
    /* grid-area: 1 / 1 / 2 / 2; */
}

.box1 {
    background: linear-gradient(45deg,
            hsl(240deg, 60%, 50%),
            hsl(300deg, 90%, 50%));
}

.box2 {
    background: linear-gradient(45deg,
            hsl(140deg, 60%, 50%),
            hsl(200deg, 90%, 50%));
}

.box3 {
    background: linear-gradient(45deg,
            hsl(0deg, 60%, 50%),
            hsl(50deg, 90%, 50%));
}

.fade-enter-from {
    opacity: 0;
}

.fade-enter-to {
    opacity: 1;
}

.fade-enter-active {
    transition: all 0.7s ease-in-out;
}

.fade-leave-from {
    opacity: 1;
}

.fade-leave-to {
    opacity: 0;
}

.fade-leave-active {
    transition: all 0.3s ease-in;
}
</style>