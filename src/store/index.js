import { createStore } from "redux";

import { comment } from "./comment";
import { post } from "./post";
import { user } from "./user";

export const store = createStore({
	modules: {
		comment,
		post,
		user,
	},
	state: {},
	mutations: {},
	actions: {},
	getters: {},
});
