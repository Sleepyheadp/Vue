<template>
  <div class="shoppingcar">
    <router-link to ="/mine/list" v-if="goods.length === 0">无添加商品，请点击"添加"</router-link>
    <div v-else>
      <mt-cell
        :title="good.CommodityName"
        :label="'￥'+good.OriginalPrice + '*' + good.num"
        v-for="good in goods"
        :key="good.CommodityId"
      >
        <mt-button @click = "addGoodInCars(good)" size="small" type="danger">+</mt-button>
        <mt-button @click = "reduceGoodInCars(good)"  size="small" type="danger">-</mt-button>
        <img  :src="good.SmallPic" width="48" height="48">
      </mt-cell>
      <div>
        <p>总数量：{{computeTotal.num}}</p>
        <p>总价格：{{computeTotal.price + '￥'}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from "vuex"
export default {
  computed:{
    ...mapState({
      goods:state=>state.myCar.cars
    }),
    ...mapGetters(["computeTotal"])
  },
  methods:{
      ...mapActions(["addGoodInCars","reduceGoodInCars"]),
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
    button{
      margin:5px;
    }
</style>