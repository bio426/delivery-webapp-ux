<template>
	<div class="Item">
		<img
			class="Item__image"
			src="@/assets/images/product.png"
			alt="item image"
		/>
		<div class="Item__container">
			<span class="Item__name">{{ item.name }}</span>
			<span class="Item__props">Prop1, prop2, prop3.</span>
			<div class="Item__container Item__container--quantity">
				<button class="Item__button" @click="removeQuantity">-</button>
				<span class="Item__quantity">{{ item.quantity }}</span>
				<button class="Item__button" @click="addQuantity">+</button>
			</div>
		</div>
		<span class="Item__price">S/ {{ (item.price * item.quantity).toFixed(2) }}</span>
		<button class="Item__button Item__button--delete" @click="removeItem">x</button>
	</div>
</template>

<script>
import { useStore } from "vuex"

export default {
	name: "Item",
	props: {
		index: Number,
		item: Object,
	},
	setup(props) {
		const store = useStore()

		return {
			removeItem: () => store.commit("removeItem",props.index),
			addQuantity: ()=>store.commit("addItemQuantity",props.index),
			removeQuantity: ()=>store.commit("removeItemQuantity",props.index),
		}
	},
}
</script>

<style src="@/assets/styles/components/Item.scss"></style>
