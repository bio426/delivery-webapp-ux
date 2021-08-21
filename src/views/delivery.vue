<template>
	<div class="delivery">
		<span class="delivery__title">Delivery</span>
		<div class="delivery__container">
			<span class="delivery__dot"></span>
			<span class="delivery__subtitle">Green Zone</span>
			<p class="delivery__description">Delivery up to 20 minutes.</p>
			<span class="delivery__dot delivery__dot--green"></span>
			<span class="delivery__subtitle">Green Zone</span>
			<p class="delivery__description">
				Delivery up to 50 minutes.
				<br />
				Minimum order amount is S/99.99
			</p>
			<span class="delivery__subtitle">Payment methods</span>
			<p class="delivery__description">
				- Delivery up to 20 minutes.
				<br />
				- Delivery up to 20 minutes.
				<br />
				- Delivery up to 20 minutes.
			</p>
		</div>
    <img class="delivery__map" src="@/assets/images/map.png" alt="">
    <button class="delivery__back">Back</button>
	</div>
</template>

<script>
export default {
	name: "delivery",
	setup() {},
}
</script>

<style src="@/assets/styles/views/delivery.scss"></style>
