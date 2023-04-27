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
// 导航守卫
import HomePageNav from "../components/vue-router/nest-routes-use-name-view/HomePage.vue";
import LoginPage from "../components/vue-router/nest-routes-use-name-view/LoginPage.vue";
import { createRouter, createWebHistory } from "vue-router";
// 定义一个登陆状态的变量
const loggedIn = true; // 默认未登陆
const routes = [
	{
		path: "/",
		component: HomePageNav,
		// components: {
		// 	nav: Navbar,
		// 	default: HomePage,
		// 	footer: FooterView,
		// },
	},
	{
		path: "/login",
		name: "login",
		component: LoginPage,
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
				path: "details/:id",
				component: BlogDetails,
				// 验证在动态参数的url路径中跳转时，beforeEnter不会重复执行，需要注意。
				beforeEnter(to, from) {
					console.log(from);
					console.log(to);
				},
			},
		],
		// 对于按路由配置的导航守卫需要注意，如果是含有动态参数的url，在它们之间跳转时由于是组件复用，并没有发生页面的跳转，所以导航守卫不会重新执行。
		beforeEnter: [authBlogsPage],
	},
	{
		path: "/blogs",
		components: {
			nav: Navbar,
			default: MyBlogs,
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
	linkExactActiveClass: "",
	linkActiveClass: "",
});
// 全局前置守卫：做一些登陆验证的操作，在跳转之前
router.beforeEach((to, from) => {
	// 这个时候可以验证登陆状态，但是我们在地址栏输入其他地址时/blogsNest/add，不会进行登陆状态的判断
	// to.path === "/blogsNest" => to.path.startsWith("/blogsNest")
	// 限制以blogsNest开头的路径都要进行登陆验证
	if (to.path.startsWith("/blogsNest")) {
		if (!loggedIn) {
			// return "/login";
			// return {
			// 	name: "login",
			// };
		}
	}
});
router.beforeResolve((to) => {
	if (to.path.startsWith("/blogsNest")) {
		if (loggedIn) {
			console.log("用户已登陆");
		}
	}
});
router.afterEach((to) => {
	document.title = to.path;
});
function authBlogsPage(to, from) {
	if (!loggedIn) {
		return "/login";
	}
}
export default router;
