import { createStore } from "Vuex";

import { comment } from "./comment";
import { post } from "./post";
import { user } from "./user";

export const store = createStore({
	modules: {
		comment,
		post,
		user,
	},
	state: {
		showUpload: false,
	},
	mutations: {
		changeUpload(state, show) {
			state.showUpload = show;
		}
	},
	actions: {
	},
	getters: {},
});
