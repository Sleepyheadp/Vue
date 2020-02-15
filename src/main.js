import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//加载通用样式
import "./stylesheets/main.scss"
//引入rem.js文件
import "./modules/rem"
//引入swiper的css样式文件  这样才能使用swiper整理好的class
import "../node_modules/swiper/css/swiper.min.css"
//引入axios并进行配置
import axios from "axios"
Vue.prototype.$http = axios  //方便我们以后在组件中通过this.$http 获取axios
//引入mint-ui中的无限滚动  在全局都可以使用，而toast只能哪个组件用就在哪个组件中引用
import {InfiniteScroll} from 'mint-ui';
Vue.use(InfiniteScroll);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// new Vue({
//   el:"#app",
//   store,
//   render:h=>h(app)
// })