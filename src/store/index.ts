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
		showDetails: false
	},
	mutations: {
		changeShowPostUpload(state, show) {
			state.showUpload = show;
		},
		changeShowPostDetails(state, show) {
			state.showDetails = show;
		}
	},
	actions: {
	},
	getters: {},
});
