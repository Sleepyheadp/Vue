<template>
  <div class="tabbar">
      <item txt="首页">
        <img slot = "normalImage" src="../../assets/ic_tab_home_normal.png" alt="">
      </item>
      <item txt="书影音">
        <img slot = "normalImage" src="../../assets/ic_tab_audio_normal.png" alt="">
      </item>
      <item txt="广播">
        <img slot = "normalImage" src="../../assets/ic_tab_broadcast_normal.png" alt="">
      </item>
      <item txt="分组">
        <img slot = "normalImage" src="../../assets/ic_tab_group_normal.png" alt="">
      </item>
      <item txt="我的">
        <img slot = "normalImage" src="../../assets/ic_tab_mine_normal.png" alt="">
      </item>
  </div>
</template>

<script>
import item from "./item"
export default {
  components:{
    item
  }
}
</script>

<style lang="scss">
  .tabbar{
    position:absolute;
    left:0;
    bottom:0;
    width:100%;
    height:60px;
    background-color: #f2f2f2;
    display:flex;
  }
</style>