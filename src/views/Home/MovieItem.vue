<template>
  <router-link 
    class="movie-item"
    tag="div"
    :to="{name:'moviedetail',params:{id:movie.id}}"
  >
      <div class="img-box">
        <img  width="100%" :src="getImages(movie.images.small)" alt="">
      </div>
      <div class="info">
        <div class="info-left">
          <div class="title">{{movie.title}}</div>
          <div class="count">{{movie.collect_count}}</div>
        </div>
        <div class="info-right">
          <div class="director">{{movie.directors[0].name}}</div>
          <div class="rating">{{movie.rating.average}}</div>
        </div>
      </div>
  </router-link>
</template>

<script>
import getImages from "@/modules/utils-getImages"
export default {
  methods:{
    getImages
  },
  props:{ //对父组件传递过来的数据进行验证
    movie:Object
  }
}
</script>

<style lang="scss" scoped>
  .movie-item{
        box-shadow: 2px 3px 4px #c5bdbd;
        border-radius:5px;
        margin-bottom: 60px;
        .img-box{
            height:2.2rem;
            img{
                height:2.2rem;
            }
        }
        .info{
            display: flex;
            justify-content: space-between;
            padding:0 .3rem;
            .title{
                font-size: 18px;
                font-weight: bold;
                color:#9d6d6d;
                padding-top:4px;
                padding-bottom:4px;
            }
            .rating,.director{
                 padding-top:4px;
                 color:orange;
                 font-size: 16px;
                 font-weight: bold;
            }
        }
    }
</style>