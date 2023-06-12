import { createComment, loadComments } from "../../apis/comment";
export const comment = {
	state() {
		return {
			list: []
		}
	},
	mutations: {
		// 初始化加载所有评论
		initializeComments(state, comments) {
			state.list = comments;
		},
	},
	actions: {
		// 添加评论
		async addComment({ commit, dispatch }, { content, postId }) {
			await createComment(content, postId);
			// 添加一个评论后，就要重新加载所有评论
			dispatch('loadAllComments', postId)
			// 评论数加1
			commit('increaseCommentCount', postId)
		},
		// 加载所有评论
		async loadAllComments({ commit }, postId) {
			const comments = await loadComments(postId);
			commit("initializeComments", comments);
		},
	},
	getters: {},
};
