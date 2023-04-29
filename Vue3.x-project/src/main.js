import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PaginationMixin from "./mixins/PaginationMixin";
import router from "./router/routes";
const app = createApp(App);
import { createStore, createLogger } from "vuex";
import { INCREMENT } from "./mutations_type";
import { users } from "./data/users";
import { blogs } from "./data/blogs";
import { usersModules } from "./store/users-modules";
import { blogsModules } from "./store/blogs-modules";
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
	plugins: [createLogger()],
	modules: {
		usersModules,
		blogsModules,
	},
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
				username: "",
				gender: "",
				occupation: "",
			},
			users: [],
			blogs: [],
			loading: false,
			// modules-vuex
			limit: 0,
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
		[INCREMENT](state) {
			state.num++;
		},
		pushToArr(state, payload) {
			state.arr.push(payload.ele);
		},
		changeUserName(state, payload) {
			state.user.name = payload.name;
		},
		loadUsers(state, payload) {
			state.users = payload.users; // payload需要是对象类型
		},
		loadBlogs(state, payload) {
			state.blogs = payload.blogs;
		},
		setLoading(state, loading) {
			state.loading = loading;
		},
		updateUser(state, payload) {
			state.user[payload.field] = payload.value;
		},
		// vuex-modules
		updateLimit(state, payload) {
			state.limit = payload.limit;
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
		// vuex-modules
		limitStr(state) {
			return "限" + state.limit + "条";
		},
	},
	actions: {
		// fetchUsers(context) {
		// 	setTimeout(() => {
		// 		context.commit("loadUsers", { users });
		// 	}, 1000);
		// },
		// fetchUsers({ commit }, payload) {
		// 	commit("setLoading", true);
		// 	setTimeout(() => {
		// 		commit("loadUsers", { users: users.slice(0, payload.limit) });
		// 		commit("setLoading", false);
		// 	}, 2000);
		// },
		async fetchUsers({ commit }) {
			// 这个await是什么意思？
			await new Promise((resolve) => setTimeout(resolve, 1000));
			commit("loadUsers", { users });
		},
		async fetchUsersAndBlogs({ dispatch, commit }) {
			await dispatch("fetchUsers"); // 执行fetchUsers异步方法
			await new Promise((resolve) => setTimeout(resolve, 1000));
			commit("loadBlogs", { blogs });
		},
		increment({ commit }) {
			setTimeout(() => {
				commit("increment");
			}, 1000);
		},
		// vuex-modules
		updateLimitAsync({ commit }, payload) {
			setTimeout(() => {
				commit("updatelimit", payload);
			}, 1000);
		},
	},
});
app.use(store);
app.mount("#app");
// createApp(App).mount("#app");
