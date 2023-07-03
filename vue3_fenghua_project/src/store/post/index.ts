import { createPost, loadPosts, likePost, favorPost } from '../../apis/post';
export const post = {
	state() {
		return {
			list: [],
			currentId: null,
			searchResult: []
		}
	},
	mutations: {
		initializePosts(state, posts) {
			state.list = posts;
		},
		// 处理点赞的逻辑
		toggleLike(state, { id, isLike }) {
			const post = state.list.find((post) => post.id === id);
			if (isLike) {
				post.liked_bies = (post.liked_bies || 0) + 1
			} else {
				post.liked_bies--;
			}
			post.likedByMe = isLike;
		},
		// 处理收藏的逻辑
		toggleFavor(state, { id, isFavor }) {
			const post = state.list.find((post) => post.id === id);
			if (isFavor) {
				post.favored_bies = (post.favored_bies || 0) + 1
			} else {
				post.favored_bies--;
			}
			post.favoredByMe = isFavor;
		},
		// 获取当前点击的帖子的id
		setCurrentId(state, id) {
			state.currentId = id;
		},
		// 评论页增加评论数
		increaseCommentCount(state, id) {
			const post = state.list.find((post) => post.id === id);
			post.comments++;
		},
		// 搜索帖子
		setPostsSearchResult(state, posts) {
			state.searchResult = posts;
		},
	},
	actions: {
		// 上传图片
		async uploadPost({ commit, dispatch }, { image, description }) {
			await createPost(image, description)
			dispatch('loadAllPosts')
			// 关闭对话框
			commit("changeShowPostUpload", false);
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
		},
		// 评论帖子
		async showPostDetails({ commit, dispatch }, id) {
			commit("setCurrentId", id)
			dispatch('loadAllComments', id)
			commit("changeShowPostDetails", true)
		},
		async hidePostDetails({ commit }) {
			commit("setCurrentId", null)
			commit("changeShowPostDetails", false)
		},
		// 搜索帖子
		async searchPosts({ commit }, term) {
			const posts = await loadPosts(
				"filters[description][$contains]=" + term
			);
			commit("setPostsSearchResult", posts);
		},
	},
	getters: {
		// 获取当前评论帖子的内容
		postDetails(state) {
			return state.list.find((post) => post.id === state.currentId)
		}
	},
};
