import { createPost, loadPosts, likePost, favorPost } from '../../apis/post';
export const post = {
	state() {
		return {
			list: [],
		}
	},
	mutations: {
		initializePosts(state, posts) {
			state.list = posts;
		},
		toggleLike(state, { id, isLike }) {
			// 处理点赞的逻辑
			const post = state.list.find((post) => post.id === id);
			if (isLike) {
				post.liked_bies = (post.liked_bies || 0) + 1
			} else {
				post.liked_bies--;
			}
			post.likedByMe = isLike;
		},
		toggleFavor(state, { id, isFavor }) {
			const post = state.list.find((post) => post.id === id);
			if (isFavor) {
				post.favored_bies = (post.favored_bies || 0) + 1
			} else {
				post.favored_bies--;
			}
			post.favoredByMe = isFavor;
		}
	},
	actions: {
		// 上传图片
		async uploadPost({ commit, dispatch }, { image, description }) {
			await createPost(image, description)
			dispatch('loadAllPosts')
			// 关闭对话框
			commit("changeUpload", false);
		},
		// 加载所有的帖子
		async loadAllPosts({ commit }) {
			const posts = await loadPosts()
			commit("initializePosts", posts)
		},
		// 喜欢帖子（点赞
		async toggleLike({ commit }, id) {
			const isLike = await likePost(id);
			commit("toggleLike", { id, isLike })
		},
		// 收藏帖子 
		async toggleFavor({ commit }, id) {
			const isFavor = await favorPost(id);
			commit("toggleFavor", { id, isFavor })
		}
	},
	getters: {},
};
