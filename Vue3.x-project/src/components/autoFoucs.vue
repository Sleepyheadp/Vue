<template>
    <input type="text" v-model="inputText" ref="inputControl" />
</template>  
<script>
export default {
    data() {
        return {
            inputText: ''
        }
    },
    mounted() {
        // 页面加载完后自动获取焦点
        this.$refs.inputControl.focus()
    },
    methods: {
        // 子组件的方法
        inputBlur() {
            this.$refs.inputControl.blur()
        }
    }
};
</script>
<style scoped>
input {
    padding: 8px 14px;
    border: 1px solid hsl(280deg, 50%, 50%);
    border-radius: 4px;
    outline: none;
    background: hsl(280deg, 50%, 30%, 0.2);
    color: white;
}
</style>