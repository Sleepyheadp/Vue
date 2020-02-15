<template>
  <div class="movie-box"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10"
  >
      <MovieItem 
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
      ></MovieItem>
  </div>
</template>

<script>
import MovieItem from "./MovieItem"
//引入mint-ui中的Toast弹出框
import {Toast} from 'mint-ui';
export default {
    props:["type"],
    components:{
        MovieItem
    },
    data(){
        return {
            movies:[],
            loading:false,// 开启无限滚动
            limit:6,
            page:1,
            hasMore:true,//代表有更多的数据
        }
    },
    watch:{
        type(){
            this.movies = [];//清空之前请求的数据
            this.page= 1;//请求第一页的数据
            this.hasMore = true;//有更多数据
            this.getMovies() // 请求数据
        }
    },
    methods:{
        loadMore(){
            if(!this.hasMore){
                //没有更多数据了，关闭无限滚动
                this.loading = true;
                //添加一个弹出框--请求数据的提示
                Toast({
                    message: '我是有底线的...',
                    position:"bottom",
                    duration:1000
                });
                //阻止后续代码的执行
                return false
            }
            this.getMovies()
        },
        getMovies(){
            let {limit,page} = this;// 从this当中取数据 
            //我们在请求数据的时候需要关闭无限滚动
            this.loading = true;
            //在请求数据时候添加一个“数据请求弹窗...”
            let instance = Toast({
                message: '正在加载中...',
                iconClass:"fa fa-circle-o-notch fa-spin",
                duration:1000
            });
            this.$http.get("/api/db/"+this.type,{
                params:{
                    //es6当中就可以忽略不写值，只写参数
                    limit,
                    page
                }
            }).then(res=>{
                this.loading = false;
                this.movies = this.movies.concat(res.data.object_list);
                //我们还需要在它请求数据的时候，也就loadMore调用getMovies方法的时候进行判断
                //因为这里我们只是将请求的页面不再++，但是并没有阻断getMovies方法的执行，当它走loadMore()的时候还会一直请求第四页的数据
                if(this.limit * this.page >= res.data.total){
                    this.hasMore = false;//没有更多数据了
                    return false //阻断下面代码的执行
                }
                this.page++
            })
        }
    },
    activated(){
        //开启无限滚动
        this.loading = false;
    },
    deactivated(){
        //关闭无限滚动
        this.loading = true;
    },
    created(){
        
    }
}
</script>

<style lang="scss" scoped>
    .movie-box{
        padding:5px 10px;
    }
</style>