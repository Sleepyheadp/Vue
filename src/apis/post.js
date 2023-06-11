/*
	apis中的文件，用于封装和后端交互的代码，然后在store中调用
*/
import { getJwtToken } from "./auth";
import { request } from "../utils/request";

// 上传图片
export async function createPost(image, description) {
	// 设置请求体：image_url和description
	// stript要求请求体是FormData类型
	const formData = new FormData();
	formData.append("files.image", image);
	formData.append("data", JSON.stringify({ description }));

	// 发送请求
	await fetch("/api/posts", {
		method: "POST",
		body: formData,
		headers: {
			Authorization: `Bearer ${getJwtToken()}`,
		},
	});
}

// 加载图片
export async function loadPosts(filters = "") {
	const response = await request(
		"/api/posts?populate=*" + (filters && `&${filters}`)
	);
	return response.data.map((post) => ({
		id: post?.id,
		// 这里的结构attributes包含image和user字段为什么还要单独赋值？
		// 答：因为这里的结构是为了方便使用，而不是为了减少代码量
		...post?.attributes,
		image: post?.attributes?.image?.data?.[0]?.attributes?.url,
		user: {
			id: post?.attributes?.user?.data?.id,
			...post?.attributes?.user?.data?.attributes,
		},
	}));
}
