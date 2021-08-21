<template>
	<div class="cart">
		<span class="cart__title">Cart</span>
		<div class="cart__list">
			<Item v-for="i in 6" :key="i" />
		</div>
		<div class="cart__total">
			Total:
			<span class="cart__price">S/ 99.99</span>
			<div class="cart__container">
				<button class="cart__button">Back</button>
				<button class="cart__button cart__button--active">Checkout</button>
			</div>
		</div>
		<div class="cart__spacer cart__spacer--big"></div>
	</div>
</template>

<script>
import Item from "@/components/Item.vue"

export default {
	name: "cart",
	components: {
		Item
	},
	setup() {

		return {
			
		}
	},
}
</script>

<style src="@/assets/styles/views/cart.scss"></style>
