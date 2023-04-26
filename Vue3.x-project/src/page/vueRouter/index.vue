<template>
    <div>
        <!-- 通过JS实现vue的路由功能 -->
        <!-- <vueRouterJS></vueRouterJS> -->
        <!-- vue-router router-link router-view -->
        <!-- <vueRouter></vueRouter> -->
        <!-- 路由嵌套：子路由 -->
        <!-- <RouterSonComp></RouterSonComp> -->
        <nav>
            <router-view name="nav"></router-view>
        </nav>
        <!-- 不设置name，则默认为default -->
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <router-view name="footer"></router-view>
        </footer>
    </div>
</template>

<script setup>
import vueRouterJS from './vueRouterJS.vue'
import vueRouter from './vueRouter.vue'
import RouterSonComp from './router-son-comp.vue'
</script>
<style scoped></style>