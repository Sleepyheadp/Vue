<template>
  <div class="back-top-box" v-if="isShow" v-backTop>
      <div class="back-top">
          <i class="fa fa-arrow-up"></i>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            isShow:false
        }
    },
    methods:{
        // backTop(){
        //     window.scrollTo(0,0)
        // },
        handleEvent(){
            let sTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(sTop >= 300 && !this.isShow){
                this.isShow = true
            }else if(sTop < 300 && this.isShow){
                this.isShow = false
            }
        }
    },
    activated(){
        window.addEventListener("scroll",this.handleEvent)
    },
    deactivated(){
        window.removeEventListener("scroll",this.handleEvent)
    },
}
</script>

<style lang="scss">
    .back-top-box{
        position: fixed;
        right:20px;
        bottom:80px;
        width:.4rem;
        height:.4rem;
        background: rgba(0,0,0,0.5);
        color:#fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        i{
            font-size:1.5em;
        }
    }
</style>