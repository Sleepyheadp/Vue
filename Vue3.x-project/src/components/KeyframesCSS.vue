<template>
    <main>
        <div class="container">
            <button @click="boxShow = !boxShow">{{ show ? '隐藏' : '显示' }}</button>
            <div :class='animationClasses' v-if="boxShow"></div>
            <div class="box2"></div>
            <input type="text" v-model="duration">
        </div>
    </main>
</template>
<script setup>
import { ref, watchEffect } from 'vue'
const duration = ref(10)
const boxShow = ref(false)
const animationClasses = ref(['box1'])
watchEffect(() => {
    if (boxShow.value) {
        animationClasses.value = ["box1", "box-enter-active", "box-enter-from"];
        setTimeout(() => {
            boxShow.value.push('box-enter-to')
        }, 500);
    }
    else {
        animationClasses.value = ['box1', "box-leave-active", "box-leave-from"];
        setTimeout(() => {
            boxShow.value.push('box-leave-to')
        }, 500);
    }
})
</script>
<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, "PingFang SC", "Microsoft Yahei", sans-serif;
}

body {
    background-color: #0f141c;
    opacity: 1;
    background-image: radial-gradient(#212943 0.6000000000000001px,
            #0f141c 0.6000000000000001px);
    background-size: 12px 12px;
    color: white;
}

#app {
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    display: grid;
    place-items: center;
}

.container {
    display: grid;
    justify-items: center;
}

input {
    padding: 8px 14px;
    border: 1px solid hsl(280deg, 50%, 50%);
    border-radius: 4px;
    outline: none;
    background: hsl(280deg, 50%, 30%, 0.2);
    color: white;
    margin-top: 64px;
}

.box1 {
    width: 100px;
    height: 100px;
    background: linear-gradient(45deg,
            hsl(240deg, 60%, 50%),
            hsl(300deg, 90%, 50%));
    padding: 0.5em 1.4em;
    border-radius: 4px;
    color: white;
    /* 单独设置了animation的class */
    /* transition: all 1s ease-in-out; */
    /* animation: rotateBox 10s linear infinite; */
    /* animation: rotateBox v-bind(duration + 's') linear infinite; */
}

.box-enter-active {
    transition: all 1s ease-in-out;
}

/* from->to 从开始到结束 */
.box.enter-from {
    opacity: 0;
}

.box-enter-to {
    opacity: 1;
}

/** 离场动画暂时不生效 */
.box-leave-active {
    transition: all 0.3s ease-in-out;
}

.box-leave-from {
    /** 不透明 */
    opacity: 1;
}

.box-leave-to {
    /** 透明 */
    opacity: 0;
}

.box2 {
    width: 100px;
    height: 100px;
    background: linear-gradient(45deg,
            hsl(140deg, 60%, 50%),
            hsl(200deg, 90%, 50%));
    padding: 0.5em 1.4em;
    border-radius: 4px;
    color: white;
    margin-top: 25px;
    transition: all 0.5s ease-in-out;
}

.box2:hover {
    transform: scale(1.25) skewY(-20deg) rotateY(20deg);
}

@keyframes rotateBox {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>