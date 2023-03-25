<template>
    <li>{{ msg }}</li>
</template>
<script>
import { watch, toRefs } from "vue";

export default {
    props: ["msg"],
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
        const { msg } = toRefs(props);
        watch(msg, (newVal) => {
            console.log('toRefs', newVal);
        });
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