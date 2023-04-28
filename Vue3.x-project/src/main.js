import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PaginationMixin from "./mixins/PaginationMixin";
import router from "./router/routes";
const app = createApp(App);
import { createStore } from "vuex";
app.use(router);

// 自定义指令
// app.directive("fsize", {
// 	mounted(el, binding) {
// 		el.style.fontSize = binding.value + "px";
// 	},
// 	updated(el, binding) {
// 		el.style.fontSize = binding.value + "px";
// 	},
// });
// 如果mounted和updated的代码相同，可以合并为：
app.directive("fsize", (el, binding) => {
	el.style.fontSize = binding.value + (binding.arg || "px");
	// console.log("binding.value:", binding.value, "binding.arg:", binding.arg);
});

// 全局注册Mixins
// PaginationMixin.js中定义了很多其他组件不需要的功能，造成了代码的冗余，不建议这样使用。
app.mixin(PaginationMixin);
// 通过Mixins实现一个全局都用一个标题
app.mixin({
	siteTitle: "我是全局的Mixins标题",
	computed: {
		siteTitle() {
			return this.$options.siteTitle;
		},
	},
});
// 全局处理异常 捕获AppList.vue中的错误
// app.config.errorHandler = (err, vm, info) => {
// 	// err：错误信息 vm：vue实例 info：错误地点
// 	console.log(err);
// 	console.log(vm);
// 	console.log(info);
// };

// vuex
const store = createStore({
	state() {
		return {
			color: [100, 100, 100],
		};
	},
	mutations: {
		randomColor(state) {
			state.color = [
				Math.floor(Math.random() * 255),
				Math.floor(Math.random() * 255),
				Math.floor(Math.random() * 255),
			];
		},
	},
});
app.use(store);
app.mount("#app");
// createApp(App).mount("#app");
