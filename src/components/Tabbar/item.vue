<template>
    <div class="item">
        <slot name="normalImage"></slot>
        <span>{{txt}}</span>
    </div>
</template>

<script>
export default {
    props:["txt"]
}
</script>

<style lang="scss" scoped>
    .item{
        display:flex;
        flex-direction:column;
        align-items:center;
        flex:1;
        img{
            width: 40px;
            height:40px;
        }
    }
</style>