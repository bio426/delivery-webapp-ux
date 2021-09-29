<template>
	<div class="detail">
		<span class="detail__title">Product {{ route.params.product }}</span>
		<img
			class="detail__image"
			src="@/assets/images/product.png"
			alt="product image"
		/>
		<span class="detail__name">Product name</span>
		<span class="detail__price">S/ {{ (route.params.product * 10).toFixed(2) }}</span>
		<span class="detail__tag">Ingredients:</span>
		<p class="detail__info">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis magni
			unde cum veritatis hic doloremque officiis quos accusamus velit,
			temporibus modi rerum iusto debitis. Dolores recusandae repellat ipsa
			commodi minima.
		</p>
		<span class="detail__tag detail__tag--size">Size:</span>
		<span class="detail__info">999 grams</span>
		<div class="detail__container detail__container--switches">
			<input
				class="detail__radio"
				type="radio"
				name="size"
				id="a1"
				value="small"
				v-model="size"
			/>
			<label class="detail__label" for="a1"> 6 pieces </label>
			<input
				class="detail__radio"
				type="radio"
				name="size"
				id="a2"
				value="medium"
				v-model="size"
				checked
			/>
			<label class="detail__label" for="a2"> 8 pieces </label>
			<input
				class="detail__radio"
				type="radio"
				name="size"
				id="a3"
				value="large"
				v-model="size"
			/>
			<label class="detail__label" for="a3"> 10 pieces </label>
		</div>
		<div class="detail__container detail__container--switches">
			<input
				class="detail__radio"
				type="radio"
				name="type"
				id="b1"
				value="standart"
				v-model="type"
				checked
			/>
			<label class="detail__label" for="b1"> Standart </label>
			<input
				class="detail__radio"
				type="radio"
				name="type"
				id="b2"
				value="thin"
				v-model="type"
			/>
			<label class="detail__label" for="b2"> Thin </label>
		</div>
		<span class="detail__tag"
			>Small - 33cm | Medium - 44cm | Large - 55cm // {{ size }} -
			{{ type }}</span
		>
		<div class="detail__container">
			<div class="detail__container detail__container--quantity">
				<button class="detail__button" @click="removeQuantity">-</button>
				<span class="detail__quantity">{{ quantity }}</span>
				<button class="detail__button" @click="addQuantity">+</button>
			</div>
			<button class="detail__button detail__button--active" @click="toCart">Add</button>
		</div>
	</div>
</template>

<script>
import { ref } from "vue"
import { useRoute } from "vue-router"
import {useStore} from "vuex"

export default {
	name: "detail",
	setup() {
		const route = useRoute()
		const store = useStore()

		let quantity = ref(1)

		function addQuantity() {
			if (quantity.value < 99) {
				quantity.value++
			}
		}

		function removeQuantity() {
			if (quantity.value > 1) {
				quantity.value--
			}
		}

		let size = ref("medium")
		let type = ref("standart")

		function toCart(){
			let product = {
				name: `Product ${route.params.product}`,
				price: route.params.product * 10,
				size: size.value,
				type: type.value,
				quantity: quantity.value
			}

			store.commit("addItem",product)
		}

		return {
			route,
			quantity,
			addQuantity,
			removeQuantity,
			size,
			type,
			toCart
		}
	},
}
</script>

<style src="@/assets/styles/views/detail.scss"></style>
