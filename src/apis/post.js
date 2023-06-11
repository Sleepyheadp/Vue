/*
	apis中的文件，用于封装和后端交互的代码，然后在store中调用
*/
import { getJwtToken } from "./auth";

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
