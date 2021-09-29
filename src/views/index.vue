<template>
	<div class="index">
		<span class="index__title">Menu</span>
		<div class="index__categories">
			<button class="index__category index__category--active">Popular</button>
			<button class="index__category">Vegetarian</button>
			<button class="index__category">Drinks</button>
		</div>
		<div class="index__products">
			<Product v-for="i in 6" :key="i" :product="i" />
		</div>
		<div class="index__spacer"></div>
	</div>
</template>

<script>
import Product from "@/components/Product.vue"

export default {
	name: "index",
	components: {
		Product
	},
	setup() {

		return {
		}
	},
}
</script>

<style src="@/assets/styles/views/index.scss">
</style>