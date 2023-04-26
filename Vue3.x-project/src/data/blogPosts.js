const blogPosts = [
	{
		id: 11,
		title: "我是文章一",
		body: "文章一内容",
	},
	{
		id: 22,
		title: "我是文章二",
		body: "文章二内容",
	},
	{
		id: 33,
		title: "我是文章三",
		body: "文章三内容",
	},
	{
		id: 44,
		title: "我是文章四",
		body: "文章四内容",
	},
];
export function getAllPosts() {
	return blogPosts;
}
export function getBlogPostsById(id) {
	// array的find方法：找到符合条件的item，并返回该项。
	return blogPosts.find((blog) => blog.id === Number(id));
}
