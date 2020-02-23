<template>
  <div class="list">
        <mt-cell
            :title="good.CommodityName"
            :label="'￥'+good.OriginalPrice"
            v-for="good in goods"
            :key="good.CommodityId"
        >
            <mt-button @click = "addGoodInCars(good)" size="small" type="danger">购买</mt-button>
            <img  :src="good.SmallPic" width="48" height="48">
        </mt-cell>
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
    data(){
        return {
            goods:[]
        }
    },
    created(){
        this.$http.get("/api/fruits.json").then(res=>{
            //console.log(res.data.CommodityList)
            this.goods = res.data.CommodityList
            //console.log(this.goods)
        })
    },
    methods:{
        /*  
            注意上面@click在调用方法时候需要调用buyGood而不是addGoodInCars方法
            buyGood(good){
                this.$store.dispatch("addGoodInCars",good)
            }
        */
       ...mapActions(["addGoodInCars"])
    }
}
</script>

<style lang="scss">
     .mint-cell{
        margin:15px 0;
    }
    .mint-cell-title{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        img{
            float:left;
        }
    }
    .mint-cell-label{
        font-size: 18px;
        color:#b09090;
    }
</style>