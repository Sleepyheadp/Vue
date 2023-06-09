const HomePage = () => import("./pages/HomePage.vue");
const SearchPage = () => import("./pages/SearchPage.vue");
const ProfilePage = () => import("./pages/ProfilePage.vue");
const ProfileEdittingPage = () => import("./pages/ProfileEdittingPage.vue");
const LoginPage = () => import("./pages/LoginPage.vue");
import { createRouter, createWebHistory } from "vue-router";
const routes = [
	{
		path: "/",
		name: "home",
		component: HomePage,
	},
	{
		path: "/search_result",
		name: "search_result",
		component: SearchPage,
	},
	{
		path: "/profile",
		name: "profile",
		component: ProfilePage,
	},
	{
		path: "/profile/edit",
		name: "profileEdit",
		component: ProfileEdittingPage,
	},
	{
		path: "/login",
		name: "login",
		component: LoginPage,
	},
];
const router = createRouter({
	routes: routes,
	history: createWebHistory(),
});
export { router };
