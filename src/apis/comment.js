import { request } from "../utils/request";

// 添加评论
export async function createComment(content, postId) {
	await request("/api/comments", {
		method: "POST",
		body: {
			data: {
				content,
				post: postId,
			},
		},
	});
}
