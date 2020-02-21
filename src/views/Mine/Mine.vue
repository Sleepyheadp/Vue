<template>
    <div class="mine">
      <mt-tabbar>
        <mt-tab-item
          v-for = "nav in navs"
          :key = nav.id
        >
          <router-link
            active-class="active"
            :to="{name:nav.name}"
          >
            <i :class="['fa','fa-'+nav.icon]"></i>
            {{nav.title}}
          </router-link>
        </mt-tab-item>
      </mt-tabbar>
      <router-view></router-view>
    </div>
</template>    

<script>
export default {
  data(){
    return {
      navs:[
        {id:1,title:"列表",icon:"list",name:"list"},
        {id:2,title:"购物车",icon:"shopping-cart",name:"shoppingcar"},
      ]
    }
  }
}
</script> 

<style lang="scss">

</style>