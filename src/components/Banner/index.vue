<template>
  <div class="home-banner swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" style="margin-top:50px"
          v-for="banner in banners"
          :key="banner.id"
        >
          <img  width="100%" :src="getImages(banner.images.small)" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper"
//引入获取图片的方法 解决豆瓣图片403不显示的问题
import getImages from "@/modules/utils-getImages"
export default {
  data(){
    return {
      //引入getImages并进行注册
      banners:[]
    }
  },
  methods:{
    getImages
  },
  created(){
    this.$http.get("/api/db/in_theaters",{
      params:{
        limit:6
      }
    }).then(res=>{
      // console.log(res.data)
      this.banners = res.data.object_list;
      //对轮播图组件进行实例化
      this.$nextTick(()=>{
        new Swiper(".home-banner",{
          loop:true,
          pagination:{
            el:".swiper-pagination"
          }
        })
      })
    })
  }
}
</script>

<style lang="scss" scoped>
  .home-banner{
    img{
      width:100%;
      height:2.2rem;
    }
  }
</style>