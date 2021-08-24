<template>
	<div class="payment">
		<span class="payment__title">Payment</span>
		<span class="payment__subtitle payment__subtitle--center">Step 1/2</span>
		<div
			class="payment__loader"
			:class="full ? 'payment__loader--full' : ''"
		></div>
		<div class="stage1" v-if="view">
			<span class="payment__subtitle">Contact</span>
			<input class="payment__input" type="text" placeholder="Your name" />
			<input class="payment__input" type="text" placeholder="Your surname" />
			<input class="payment__input" type="text" placeholder="Your phone" />
			<span class="payment__subtitle">Shipment</span>
			<input class="payment__input" type="text" placeholder="Street" />
			<div class="payment__container">
				<select class="payment__input payment__input--small" name="" id="">
					<option value="">option1</option>
					<option value="">option2</option>
					<option value="">option3</option>
				</select>
				<input
					class="payment__input payment__input--small"
					type="text"
					placeholder="House number"
				/>
			</div>
			<textarea
				class="payment__input payment__input--textarea"
				placeholder="Comment"
			></textarea>
		</div>
		<div class="stage2" v-else>
			<span class="payment__subtitle"> Payment data </span>
			<span class="payment__indication"> 1. Select your payment data </span>
			<div class="payment__container">
				<input class="payment__radio" type="radio" name="pay" id="a1" checked />
				<label class="payment__label" for="a1"> 6 pieces </label>
				<input class="payment__radio" type="radio" name="pay" id="a2" />
				<label class="payment__label" for="a2"> 8 pieces </label>
				<input class="payment__radio" type="radio" name="pay" id="a3" />
				<label class="payment__label" for="a3"> 10 pieces </label>
			</div>
			<span class="payment__indication"> 2. Enter your Card Details </span>
      <label for=""></label>
      <input type="text" placeholder="0000-0000-0000-0000">
      <div class="payment__container">
        <input type="text">
        <select name="" id="">
          <option value="">month1</option>
          <option value="">month1</option>
          <option value="">month1</option>
        </select>
        <select name="" id="">
          <option value="">day1</option>
          <option value="">day1</option>
          <option value="">day1</option>
        </select>
      </div>
      <span class="payment__indication"> Save card for future payments </span>
      <input type="checkbox" name="" id="">
      <span>Total:</span>
      <span>S/ 99.99</span>
		</div>
		<div class="payment__container payment__container--buttons">
			<button class="payment__button" @click="toogleView">Back</button>
			<button
				class="payment__button payment__button--active"
				@click="fillLoader"
			>
				Next
			</button>
		</div>
	</div>
</template>

<script>
import { ref } from "vue"

export default {
	name: "payment",
	setup() {
		let full = ref(false)
		function fillLoader() {
			full.value = true
		}

		let view = ref(false)
		function toogleView() {
			view.value = !view.value
		}

		return {
			full,
			fillLoader,
			view,
			toogleView,
		}
	},
}
</script>

<style src="@/assets/styles/views/payment.scss"></style>
