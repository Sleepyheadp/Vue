import PageOne from "../components/vue-router/page-spa/PageOne.vue";
import PageTwo from "../components/vue-router/page-spa/PageTwo.vue";
import PageThree from "../components/vue-router/page-spa/PageThree.vue";
import NestHome from "../components/vue-router/nest-routes/nest-home.vue";
import NestAbout from "../components/vue-router/nest-routes/nest-about.vue";
import NestAboutWork from "../components/vue-router/nest-routes/nest-about-work.vue";
import NestAboutEdu from "../components/vue-router/nest-routes/nest-about-edu.vue";
import BlogPostPage from "../components/vue-router/blog-pages/BlogPostPage.vue";
import BlogListPage from "../components/vue-router/blog-pages/BlogListPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
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
		path: "/home",
		component: NestHome,
	},
	{
		path: "/about",
		component: NestAbout,
		children: [
			{ path: "work", component: NestAboutWork },
			{ path: "edu", component: NestAboutEdu },
		],
	},
	{
		path: "/blogList",
		component: BlogListPage,
	},
	{
		path: "/:postId",
		component: BlogPostPage,
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;
