import { createStore, createLogger } from "vuex";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import { usersModules } from "./modules/users-modules";
import { blogsModules } from "./modules/blogs-modules";
export const store = createStore({
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
	mutations: mutations,
	actions: actions,
	getters: getters,
});
