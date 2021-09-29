import { createRouter, createWebHistory } from "vue-router"
import index from "@/views/index.vue"

const routes = [
	{ path: "/", name: "index", component: index },
	{ path: "/cart", name: "cart", component: () => import("@/views/cart.vue") },
	{ path: "/user", name: "user", component: () => import("@/views/user.vue") },
	{ path: "/detail/:product", name: "detail", component: () => import("@/views/detail.vue") },
	{ path: "/about", name: "about", component: () => import("@/views/about.vue") },
	{ path: "/delivery", name: "delivery", component: () => import("@/views/delivery.vue") },
	{ path: "/payment", name: "payment", component: () => import("@/views/payment.vue") },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
