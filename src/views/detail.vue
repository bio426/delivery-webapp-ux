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
			<input class="detail__radio" type="radio" name="size" id="a1" checked />
			<label class="detail__label" for="a1"> 6 pieces </label>
			<input class="detail__radio" type="radio" name="size" id="a2" />
			<label class="detail__label" for="a2"> 8 pieces </label>
			<input class="detail__radio" type="radio" name="size" id="a3" />
			<label class="detail__label" for="a3"> 10 pieces </label>
		</div>
		<div class="detail__container detail__container--switches">
			<input class="detail__radio" type="radio" name="type" id="b1" checked />
			<label class="detail__label" for="b1"> Standart </label>
			<input class="detail__radio" type="radio" name="type" id="b2" />
			<label class="detail__label" for="b2"> Thin </label>
		</div>
		<span class="detail__tag">Small - 33cm | Medium - 44cm | Large - 55cm</span>
		<div class="detail__container">
			<div class="detail__container detail__container--quantity">
				<button class="detail__button">-</button>
				<span class="detail__quantity">99</span>
				<button class="detail__button">+</button>
			</div>
			<button class="detail__button detail__button--active">Add</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "detail",
	setup() {},
}
</script>

<style src="@/assets/styles/views/detail.scss"></style>
