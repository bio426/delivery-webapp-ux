<template>
	<div class="cart">
		<span class="cart__title">Cart</span>
		<div class="cart__list">
			<Item
				v-for="(item, index) in cart"
				:key="index"
				:index="index"
				:item="item"
			/>
		</div>
		<div class="cart__total">
			Total:
			<span class="cart__price">S/ {{ cartTotal }}</span>
			<div class="cart__container">
				<button class="cart__button">Back</button>
				<router-link class="cart__button cart__button--active" to="/payment"
					>Checkout</router-link
				>
			</div>
		</div>
		<div class="cart__spacer cart__spacer--big"></div>
	</div>
</template>

<script>
import { computed } from "vue"
import { useStore } from "vuex"

import Item from "@/components/Item.vue"

export default {
	name: "cart",
	components: {
		Item,
	},
	setup() {
		const store = useStore()

		return {
			cart: computed(() => store.state.cart),
			cartTotal: computed(() => store.getters.cartTotal),
		}
	},
}
</script>

<style src="@/assets/styles/views/cart.scss"></style>
