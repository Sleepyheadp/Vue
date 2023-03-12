<template>
    <div>
        count:{{ count }}
        <!-- 第一种写法：注释的 -->
        <!-- <button @click="$emit('handleAdd')">增加</button> -->
        <button @click="changeNumber">增加</button>
    </div>
</template>
<script>
export default {
    props: ['count'],
    // emits: ['handleAdd']
    methods: {
        changeNumber() {
            this.$emit('handleAdd')
        }
    }
}

</script>
<style></style>