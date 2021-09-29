<template>
	<div class="Product">
		<router-link to="/detail">
			<img
				class="Product__image"
				src="@/assets/images/product.png"
				alt="product image"
			/>
		</router-link>
		<span class="Product__name">Product {{ product }}</span>
		<button class="Product__add" @click="add">+</button>
		<span class="Product__price">S/9.99 - S/0.00</span>
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

		function add() {
			store.commit("addProduct",{
        name: `Product ${props.product}`,
        price: props.product * 10
      })
		}

		return {
			add,
		}
	},
}
</script>

<style src="@/assets/styles/components/Product.scss"></style>
