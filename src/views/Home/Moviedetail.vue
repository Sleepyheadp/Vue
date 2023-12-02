<template>
    <div class="movie-detail">
        <div class="loading" v-if="!movie"></div>
        <div v-else>
            <mt-header fixed :title="movie.title">
                <router-link to="/" slot="left">
                    <mt-button icon="back">返回</mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
            <div style="padding-top:40px">
                <div class="img-box">
                    <img width="100%" :src="getImages(movie.images.small)" alt="">
                </div>
            </div>
            <div class="movieTitle">{{movie.title}}</div>
            <div class="movie-story">{{movie.summary}}</div>
            <p>演员：</p>
            <router-link
                v-for="cast in movie.casts"
                :key="cast.id"
                tag="div"
                :to="{name:'moviedetailActor'}"
            >
                <img width="85" height="85" :src="getImages(cast.avatars.small)"/>
                <p>{{cast.name}}</p>
            </router-link>
        </div>
    </div>
</template>

<script>
import getImages from "@/modules/utils-getImages"
export default {
    data(){
        return {
            movie:""
        }
    },
    methods:{
        getImages
    },
    created(){
        this.$http.get("/api/db/movie_detail/"+this.$route.params.id).then(res=>{
            this.movie = res.data;
        })
    }
    
}
</script>

<style lang="scss">
    .img-box{
        height:2.4rem;
        img{
            height:100%;
        }
    }
    .movieTitle{
        height:50px;
        padding:5px 0;
        display:flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
    }
    .movie-story{
        padding:20px;
    }
</style>