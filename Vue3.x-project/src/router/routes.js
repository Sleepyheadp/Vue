import PageOne from "../components/vue-router/PageOne.vue";
import PageTwo from "../components/vue-router/PageTwo.vue";
import PageThree from "../components/vue-router/PageThree.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
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
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;
