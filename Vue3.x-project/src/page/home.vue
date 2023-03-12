<template >
    <div>
        <!-- slot插槽简单用法 -->
        <HelloWorld msg="Vite + Vue" version=3>
            <template v-slot:more>
                <!-- v-slot:more可以简写为#more -->
                <div>slot插槽内容:父组件template中添加div</div>
            </template>
        </HelloWorld>
        <!-- 在传递的slot模版中访问子组件的属性 -->
        <slot-son-attr>
            <!-- 简写：<template #contact="props"> -->
            <template v-slot:contact="props">
                <p>{{ props.contact.name }}</p>
                <p>{{ props.contact.email }}</p>
            </template>
            <!-- 解构：
                <template #contact="{ contact }"> 
                <p>{{ contact.name }}</p>
                <p>{{ contact.email }}</p>
            -->
        </slot-son-attr>
        <!-- $emit用法 -->
        <son-to-father @handleAdd="addMore" :count='count'></son-to-father>
        <!-- 在组件中使用watch监听动态属性 -->
        <addMoreWatch :totalPage="totalPage" :currentPageProps="currentPage"></addMoreWatch>
        <button @click="totalPage += 1">增加页数</button>
        <!-- props的高级版 => provide/inject的使用 -->
        <movieCard></movieCard>
    </div>
</template>
<script>
import HelloWorld from '../components/HelloWorld.vue'
import sonToFather from '../components/sonToFather.vue'
import addMoreWatch from '../components/addMoreWatch.vue'
import movieCard from '../components/movies-provide-inject/MovieCard.vue'
import slotSonAttr from '../components/slotSonAttrs.vue'
export default {
    components: { HelloWorld, sonToFather, addMoreWatch, movieCard, slotSonAttr },
    data() {
        return {
            count: 0,
            totalPage: 6,
            currentPage: 6
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
    margin-bottom: 10px;
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