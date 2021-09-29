<template>
	<div class="Product">
		<router-link :to="'/detail/' + product">
			<img
				class="Product__image"
				src="@/assets/images/product.png"
				alt="product image"
			/>
		</router-link>
		<span class="Product__name">Product {{ product }}</span>
		<button class="Product__add" @click="toCart">+</button>
		<span class="Product__price"
			>S/{{ (product * 10).toFixed(2) }} - S/0.00</span
		>
		<p class="Product__description">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
			atque?
		</p>
	</div>
</template>

<script>
import { useStore } from "vuex"

export default {
	name: "Product",
	props: {
		product: Number,
	},
	setup(props) {
		const store = useStore()

		function toCart() {
			store.commit("addItem", {
				name: `Product ${props.product}`,
				price: props.product * 10,
				size: "medium",
				type: "standart",
				quantity: 1
			})
		}

		return {
			toCart,
		}
	},
}
</script>

<style src="@/assets/styles/components/Product.scss"></style>
