<template >
    <div>
        <!-- slot插槽用法 -->
        <HelloWorld msg="Vite + Vue" version=3>
            <template v-slot:more>
                <!-- 可以简写为#more -->
                <div>slot插槽内容</div>
                <div>....</div>
            </template>
        </HelloWorld>
        <!-- $emit用法 -->
        <son-to-father @handleAdd="addMore" :count='count'></son-to-father>
        <!-- 在组件中使用watch监听动态属性 -->
        <addMoreWatch :totalPage="totalPage" :currentPageProps="currentPage"></addMoreWatch>
        <button @click="totalPage += 1">增加页数</button>

    </div>
</template>
<script>
import HelloWorld from '../components/HelloWorld.vue'
import sonToFather from '../components/sonToFather.vue'
import addMoreWatch from '../components/addMoreWatch.vue'
export default {
    components: { HelloWorld, sonToFather, addMoreWatch },
    data() {
        return {
            count: 0,
            totalPage: 6,
            currentPage: 0
        }
    },
    methods: {
        addMore() {
            this.count++
        }
    }
}
</script>
<style>
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
    width: 60vw;
}

button {
    border: none;
    background: linear-gradient(90deg,
            hsl(240deg, 50%, 50%),
            hsl(280deg, 50%, 50%));
    padding: 1em 2em;
    margin-top: 24px;
    margin-right: 12px;
    border-radius: 4px;
    color: white;
}
</style>