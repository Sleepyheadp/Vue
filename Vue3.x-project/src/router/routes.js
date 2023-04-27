import PageOne from "../components/vue-router/page-spa/PageOne.vue";
import PageTwo from "../components/vue-router/page-spa/PageTwo.vue";
import PageThree from "../components/vue-router/page-spa/PageThree.vue";
import NestHome from "../components/vue-router/nest-routes/nest-home.vue";
import NestAbout from "../components/vue-router/nest-routes/nest-about.vue";
import NestAboutWork from "../components/vue-router/nest-routes/nest-about-work.vue";
import NestAboutEdu from "../components/vue-router/nest-routes/nest-about-edu.vue";
import BlogPostPage from "../components/vue-router/blog-pages/BlogPostPage.vue";
import BlogListPage from "../components/vue-router/blog-pages/BlogListPage.vue";
// 命名视图
import HomePage from "../components/vue-router/name-view/HomePage.vue";
import FooterView from "../components/vue-router/name-view/FooterView.vue";
import FooterViewAbout from "../components/vue-router/name-view/FooterViewAbout.vue";
import AboutMe from "../components/vue-router/name-view/AboutMe.vue";
import Navbar from "../components/vue-router/name-view/Navbar.vue";
import MyBlogs from "../components/vue-router/name-view/MyBlogs.vue";
// 嵌套路由使用命名视图
import AddBlog from "../components/vue-router/nest-routes-use-name-view/AddBlog.vue";
import BlogDetails from "../components/vue-router/nest-routes-use-name-view/BlogDetails.vue";
import BlogManagement from "../components/vue-router/nest-routes-use-name-view/BlogManagement.vue";
import RightSidebar from "../components/vue-router/nest-routes-use-name-view/RightSidebar.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		components: {
			nav: Navbar,
			default: HomePage,
			footer: FooterView,
		},
	},
	{
		path: "/abouts",
		components: {
			nav: Navbar,
			default: AboutMe,
			footer: FooterViewAbout,
		},
	},
	{
		path: "/blogs",
		components: {
			nav: Navbar,
			default: MyBlogs,
		},
	},
	{
		path: "/blogsNest",
		component: BlogManagement,
		children: [
			{
				path: "add",
				components: {
					default: AddBlog,
					rightSideBar: RightSidebar,
				},
			},
			{
				path: "details",
				component: BlogDetails,
			},
		],
	},
	{
		path: "/1",
		component: PageOne,
	},
	{
		path: "/2",
		component: PageTwo,
	},
	{
		path: "/3",
		component: PageThree,
	},
	{
		path: "/home/:id",
		name: "home",
		component: NestHome,
	},
	// alias1、配置了name属性后设置alias
	{
		path: "/about/:id",
		name: "about",
		component: NestAbout,
		children: [
			{ path: "work", component: NestAboutWork },
			{ path: "edu", component: NestAboutEdu },
		],
		alias: "/connect/:id",
	},
	// alias2、设置多个alias路由别名
	// redirect1、普通重定向：从blogList重定向到/根路径
	{
		path: "/blogList",
		redirect: "/", // 重定向的路径首先要存在，才能重定向到指定的路径
	},
	{
		path: "/blogList",
		component: BlogListPage,
		name: "blogList",
		alias: ["/blog", "/list"],
	},
	// redirect3、重定向的目标也可以是一个命名的路由
	{
		path: "/listHome",
		redirect: {
			name: "blogList",
		},
	},
	// alias3、带动态参数的，别名在前面起（自己定义别名
	{
		path: "/:postId",
		component: BlogPostPage,
		name: "blogPost",
		alias: "/pId/:postId",
	},
	// redirect2、重定向中含有动态参数
	{
		path: "/posts/:postId",
		redirect: (to) => {
			return {
				path: `/${to.params.postId}`,
			};
		},
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;
