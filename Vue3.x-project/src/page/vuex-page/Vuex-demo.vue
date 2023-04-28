<template>
    <div class="main">
        <!-- <div>{{ name }}</div>
        <p>{{ age }}</p>
        <p>{{ work }}</p>
        <p>{{ tip }}</p>
        <p>{{ bgColor }}</p> -->
        <p>{{ num }}</p>
        <!-- <button @click="increament">增加数量</button> -->
        <button @click="$store.commit('increament')">增加数量</button>
        {{ arr }}
        <!-- <button @click="pushToArr({ ele: arr.length + 1 })">追加元素1</button> -->
        <!-- 如果使用$store.commit传递payload -->
        <!-- <button @click="$store.commit('pushToArr', { ele: arr.length + 1 })">追加元素2</button> -->
        <button @click="$store.commit({ type: 'pushToArr', ele: arr.length + 1 })">追加元素3</button>
        <p>user: <span>{{ user }}</span></p>
        <button @click="changeUserName({ name: '张三' })">修改用户名1</button>
        <!-- <button @click="$store.commit({ type: 'changeUserName', name: '张三' })">修改用户名2</button> -->
    </div>
</template>
<script>
import { mapState, mapMutations } from "vuex"
import { INCREAMENT } from "../../mutations_type"
export default {
    // 1、对单个state数据进行computed监听(冗余)
    // computed: {
    //     name() {
    //         return this.$store.state.name
    //     },
    //     age() {
    //         return this.$store.state.age
    //     }
    // },
    // 2、使用mapState
    // computed: mapState({
    //     color: (state) => state.color,
    //     name: 'name',
    //     age: 'age'
    // })
    // 3、需要对个别数据进行处理
    computed: {
        bgColor() {
            const colors = this.$store.state.color
            return `rgb(${colors.join(',')})`
        },
        ...mapState(['name', 'age', 'work', 'tip', 'num', 'arr', 'user'])
    },
    methods: mapMutations([INCREAMENT, 'pushToArr', 'changeUserName'])
}
</script>
<style scoped>
.main {
    display: flex;
    flex-direction: column;
}

button {
    width: 150px;
    height: 50px;
}
</style>