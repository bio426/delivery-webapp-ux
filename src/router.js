import { createRouter, createWebHistory } from "vue-router"
import index from "@/views/index.vue"

const routes = [
	{ path: "/", name: "index", component: index },
	{ path: "/cart", name: "cart", component: () => import("@/views/cart.vue") },
	{ path: "/user", name: "user", component: () => import("@/views/user.vue") },
	{ path: "/detail", name: "detail", component: () => import("@/views/detail.vue") },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
