import { createPost } from '../../apis/post';
export const post = {
	state() { },
	mutations: {},
	actions: {
		async uploadPost({ commit, dispatch }, { image, description }) {
			await createPost(image, description)
			// 关闭对话框
			commit("changeUpload", false);
		}
	},
	getters: {},
};
