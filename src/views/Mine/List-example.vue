<template>
  <div class="list">
    <div class="mine-list" style="padding-top:50px">
      <p>num:{{num}}</p>
      <p>doubleNum:{{doubleNum}}</p>
      <p><button @click="CHANGE_NUM">changeNum</button></p>
      <p><button @click="getNumFromBackEnd">getRandom</button></p>
    </div>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from "vuex"
//为什么不引入CHANGE_NUM也可以直接用？
import {CHANGE_NUM,RANDOM_NUM} from "@/store/Num/const"
export default {
  computed:{
    /*
      data(){
        return {
          num:this.$store.state.Num.num,
        }
      },
      ------
      ...mapState(["num"]),
    */
    ...mapState({
      num:state=>state.Num.num  //重命名的写法
    }),
    /*
      默认写法
      doubleNum(){
        return this.$store.getters.doubleNum
      },
    */
    ...mapGetters(["doubleNum"])
  },
  methods:{
    /*
      默认写法
      changeNum(){
        this.$store.commit("changeNum")
      }
    */
    ...mapMutations(["CHANGE_NUM"]),
    /*
      getRandom(){
        this.$store.dispatch("getNumFromBackEnd")
      }
    */
    ...mapActions(["getNumFromBackEnd"])
  }
}
</script>

<style>

</style>