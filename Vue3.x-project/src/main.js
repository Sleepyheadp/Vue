import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PaginationMixin from "./mixins/PaginationMixin";
import router from "./router/routes";
const app = createApp(App);
import { createStore } from "vuex";
import { INCREAMENT } from "./mutations_type";
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
			name: "Capoo",
			age: 25,
			work: "frontEnd",
			tip: "hello world!",
			num: 1,
			arr: [1, 2, 3],
			user: {
				id: 1,
				name: "John",
				age: 25,
			},
			users: [
				{
					id: 1,
					name: "John",
					age: 25,
				},
				{
					id: 2,
					name: "Jane",
					age: 26,
				},
				{
					id: 3,
					name: "Jack",
					age: 27,
				},
				{
					id: 4,
					name: "Jill",
					age: 28,
				},
			],
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
		[INCREAMENT](state) {
			state.num++;
		},
		pushToArr(state, payload) {
			state.arr.push(payload.ele);
		},
		changeUserName(state, payload) {
			state.user.name = payload.name;
		},
	},
	getters: {
		// 返回年龄大于26的user
		usersOlderThan26(state) {
			return state.users.filter((user) => user.age > 26);
		},
		// 总计(getters方法内也可以调用其他的getters方法)
		numberOfUsersOlderThan26(state, getters) {
			return getters.usersOlderThan26.length;
		},
		//
		usersOlderThan(state) {
			// age 和 user 怎么看的有点晕呢？
			// => 其实就是过滤users数组中大于传递参数值的项
			return (age) => state.users.filter((user) => user.age > age);
		},
	},
});
app.use(store);
app.mount("#app");
// createApp(App).mount("#app");
