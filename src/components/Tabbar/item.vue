<template>
    <div class="item" @click="change">
        <slot v-if="flag" name="activeImage"></slot>
        <slot v-else name="normalImage"></slot>
        <!-- <span :class="{active:flag}">{{txt}}</span> -->
        <span :class="{active:flag}">{{txt}}</span>
    </div>
</template>

<script>
export default {
    props:["txt","mark","sel"],
    computed:{
        flag(){
            if(this.mark === this.sel){
                return true
            }
            return false;
        }
    },
    methods:{
        change(){
            /*
                第一种方法 父传子方法 改变自身的数据  需要props接收
                this.changeSel(this.mark)
            */
           //第二种方法  事件绑定@ $emit触发 不需要props接收
           //this.$emit("changeSel",this.mark)
           //编程式导航--路由跳转
           this.$router.push("/"+this.mark)
           //console.log(this)
        }
    }
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
        .active{
            color:#50aa50;
        }
    }
</style>