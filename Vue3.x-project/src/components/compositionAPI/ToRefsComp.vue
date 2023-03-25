<template>
    <div>
        <li>{{ msg }}</li>
        <p v-for="item in propsArr" :key="item.id">{{ item.role }}</p>
    </div>
</template>
<script>
import { watch, toRefs } from "vue";

export default {
    props: ["msg", 'propsArr'],
    setup(props) {
        // toRefs使用：将静态数据转换为ref响应性数据
        // 为什么监听不到呢？因为message为数组类型，并没有监听具体的值，props.tels[1].number 就可以监听到。
        // () => props.tels[1].number,
        // watch(
        //     () => props.tels[1].number,
        //     (newVal, oldVal) => {
        //         console.log('toRefs:', newVal, oldVal);
        //     }
        // )
        console.log('props.propsArr', props.propsArr)
        const { msg } = toRefs(props);
        watch(msg, (newVal) => {
            console.log('toRefs', newVal);
        });
        watch(props.propsArr, (newVal) => {
            console.log(newVal.length)
        }, {
            deep: true
        })
        return {};
    },
};
</script>
<style scoped>
li {
    display: flex;
    align-items: center;
    gap: 12px;
}

li::before {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    background-color: hsl(280deg, 100%, 70%);
    border-radius: 100%;
}
</style>