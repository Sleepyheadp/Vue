import { createComment } from "../../apis/comment";
// import { post } from "../post";
export const comment = {
	// modules: {
	// 	post
	// },
	state() {
		return {
			list: []
		}
	},
	mutations: {},
	actions: {
		async addComment({ commit, dispatch }, { content, postId }) {
			await createComment(content, postId);
			commit('increaseCommentCount', postId)
		}
	},
	getters: {},
};
