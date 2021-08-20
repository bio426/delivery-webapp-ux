<template>
	<div class="detail">
		<span class="detail__title">Product full name</span>
		<img
			class="detail__image"
			src="@/assets/images/product.png"
			alt="product image"
		/>
		<span class="detail__name">Product name</span>
		<span class="detail__price">S/ 99.99</span>
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
			<button class="detail__button">8 pieces</button>
			<button class="detail__button">10 pieces</button>
		</div>
		<div class="detail__container detail__container--switches">
			<button class="detail__button">Small</button>
			<button class="detail__button">Medium</button>
			<button class="detail__button">Large</button>
		</div>
		<span class="detail__tag">Small - 33cm | Medium - 44cm | Large - 55cm</span>
		<div class="detail__container">
			<div class="detail__container detail__container--quantity">
				<button class="detail__button detail__button--quantity">-</button>
				<span class="detail__quantity">99</span>
				<button class="detail__button detail__button--quantity">+</button>
			</div>
			<button class="detail__button detail__button--active">Add</button>
		</div>
		<div class="detail__spacer"></div>
		<Navigation />
	</div>
</template>

<script>
import Navigation from "@/components/Navigation.vue"

export default {
	name: "detail",
	components: {
		Navigation,
	},
	setup() {},
}
</script>

<style src="@/assets/styles/views/detail.scss"></style>
