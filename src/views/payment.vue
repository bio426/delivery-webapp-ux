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
			<div class="payment__container payment__container--two">
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
			<span class="payment__indication payment__indication--my">
				1. Select your payment data
			</span>
			<div class="payment__container payment__container--three">
				<input class="payment__radio" type="radio" name="pay" id="a1" checked />
				<label class="payment__label" for="a1">
					<svg
						class="payment__ico"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
					>
						<g>
							<path
								d="M458.667,85.333H53.333C23.936,85.333,0,109.269,0,138.667v234.667c0,29.397,23.936,53.333,53.333,53.333h405.333
			c29.397,0,53.333-23.936,53.333-53.333V138.667C512,109.269,488.064,85.333,458.667,85.333z M490.667,373.333
			c0,17.643-14.357,32-32,32H53.333c-17.643,0-32-14.357-32-32V138.667c0-17.643,14.357-32,32-32h405.333c17.643,0,32,14.357,32,32
			V373.333z"
							/>
							<path
								d="M501.333,149.333H10.667C4.779,149.333,0,154.112,0,160v64c0,5.888,4.779,10.667,10.667,10.667h490.667
			c5.888,0,10.667-4.779,10.667-10.667v-64C512,154.112,507.221,149.333,501.333,149.333z M490.667,213.333H21.333v-42.667h469.333
			V213.333z"
							/>
							<path
								d="M202.667,298.667h-128c-5.888,0-10.667,4.779-10.667,10.667S68.779,320,74.667,320h128
			c5.888,0,10.667-4.779,10.667-10.667S208.555,298.667,202.667,298.667z"
							/>
							<path
								d="M202.667,341.333h-128C68.779,341.333,64,346.112,64,352c0,5.888,4.779,10.667,10.667,10.667h128
			c5.888,0,10.667-4.779,10.667-10.667C213.333,346.112,208.555,341.333,202.667,341.333z"
							/>
							<path
								d="M416,277.333h-21.333c-17.643,0-32,14.357-32,32v21.333c0,17.643,14.357,32,32,32H416c17.643,0,32-14.357,32-32v-21.333
			C448,291.691,433.643,277.333,416,277.333z M426.667,330.667c0,5.888-4.779,10.667-10.667,10.667h-21.333
			c-5.888,0-10.667-4.779-10.667-10.667v-21.333c0-5.888,4.779-10.667,10.667-10.667H416c5.888,0,10.667,4.779,10.667,10.667
			V330.667z"
							/>
						</g>
					</svg>
					Credit Card
				</label>
				<input class="payment__radio" type="radio" name="pay" id="a2" />
				<label class="payment__label" for="a2">
					<svg
						class="payment__ico"
						viewBox="0 0 512.00059 512"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="m487.160156 115.148438c-10.972656-13.019532-25.710937-23.84375-43.867187-32.246094-4.066407-10.394532-9.671875-19.863282-16.828125-28.355469-28.609375-33.949219-82.910156-52.644531-152.910156-52.644531-20.957032 0-103.8125-.875-150.429688-1.8945315-18.910156-.3984375-35.574219 12.6679685-39.703125 31.0937495l-82.445313 370.886719c-2.660156 11.855469.171876 24.097657 7.769532 33.585938 7.59375 9.484375 18.921875 14.925781 31.070312 14.925781h24.546875l-2.6875 12.089844c-2.660156 11.855468.171875 24.097656 7.769531 33.585937 7.59375 9.484375 18.921876 14.925781 31.074219 14.925781h99.796875c18.917969 0 35.332032-13.464843 39.035156-32.011718l17.683594-88.546875 93.421875-1.074219.769531-.085938c6.207032-.714843 38.941407-5.480468 73.988282-29.210937 19.988281-13.53125 36.960937-30.757813 50.449218-51.203125 16.445313-24.917969 27.722657-54.695312 33.511719-88.496094 7.484375-43.671875.078125-79.109375-22.015625-105.324218zm-454.976562 301.660156c-1.097656-1.371094-2.804688-4.265625-1.90625-8.28125l82.445312-370.875c1.019532-4.519532 5.121094-7.746094 9.75-7.625 46.789063 1.019531 130.019532 1.898437 151.082032 1.898437 60.109374 0 107.476562 15.296875 129.949218 41.96875 16.125 19.136719 21.300782 46.359375 15.382813 80.902344-9.226563 53.820313-33.179688 94.164063-71.207031 119.910156-28.203126 19.097657-55.203126 23.511719-59.90625 24.15625l-92.8125 1.066407c-14.152344 0-24.90625 8.140624-27.386719 20.710937l-18.363281 91.96875c-.910157 4.558594-4.945313 7.867187-9.59375 7.867187h-99.800782c-4.085937 0-6.539062-2.300781-7.632812-3.667968zm447.398437-201.410156c-9.222656 53.820312-33.175781 94.164062-71.203125 119.910156-28.203125 19.097656-55.203125 23.511718-59.90625 24.15625l-92.8125 1.066406c-14.152344 0-24.90625 8.140625-27.386718 20.710938l-18.363282 91.96875c-.910156 4.558593-4.945312 7.867187-9.59375 7.867187h-99.796875c-4.089843 0-6.539062-2.296875-7.636719-3.667969-1.097656-1.371094-2.804687-4.265625-1.90625-8.28125l4.144532-18.628906h44.5c18.914062 0 35.332031-13.464844 39.035156-32.011719l17.679688-88.550781 93.421874-1.070312.769532-.085938c6.207031-.714844 38.941406-5.480469 73.988281-29.210938 19.988281-13.535156 36.960937-30.761718 50.453125-51.203124 16.441406-24.921876 27.71875-54.695313 33.507812-88.5 2.28125-13.3125 3.171876-25.855469 2.691407-37.609376 4.976562 3.765626 9.335937 7.847657 13.035156 12.234376 16.125 19.140624 21.300781 46.363281 15.378906 80.90625zm0 0"
						/>
					</svg>
					Paypal
				</label>
				<input class="payment__radio" type="radio" name="pay" id="a3" />
				<label class="payment__label" for="a3">
					<svg
						class="payment__ico"
						viewBox="0 0 60 52"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g>
							<path
								id="Shape"
								d="m58 12h-41c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1h6.045c-4.4379108 2.8239389-7.1020984 7.7401119-7.045 13-.0570984 5.2598881 2.6070892 10.1760611 7.045 13h-21.045v-26h10c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-10c-1.1045695 0-2 .8954305-2 2v26c0 1.1045695.8954305 2 2 2h56c1.1045695 0 2-.8954305 2-2v-26c0-1.1045695-.8954305-2-2-2zm-40 15c0-7.168 5.383-13 12-13s12 5.832 12 13-5.383 13-12 13-12-5.832-12-13zm40 13h-21.045c4.4379108-2.8239389 7.1020984-7.7401119 7.045-13 .0570984-5.2598881-2.6070892-10.1760611-7.045-13h21.045z"
							/>
							<path
								id="Shape"
								d="m52.736 1.21c-.4734207-.23692093-1.0214626-.27647776-1.524-.11l-21.54 7.219c-.5246705.17562655-.8076266.74332949-.632 1.268.1756266.5246705.7433295.8076266 1.268.632l21.534-7.219 2.21 6.589c.1134318.33940232.3993161.5925078.7499631.6639742.3506469.0714663.7127849-.049564.95-.31750005.2372151-.267936.3134687-.64207184.2000369-.98147415l-2.211-6.585c-.1647423-.50619768-.5272331-.92423433-1.005-1.159z"
							/>
							<path
								id="Shape"
								d="m29.692 43.782-21.534 7.218-2.21-6.589c-.17535041-.5246705-.74282949-.8078504-1.2675-.6325s-.80785041.7428295-.6325 1.2675l2.207 6.583c.16356944.5052833.52413035.9231734 1 1.159.27685751.1377021.58178849.2095713.891.21.21495723.0003078.42860579-.0334439.633-.1l21.54-7.219c.5246705-.1756266.8076266-.7433295.632-1.268s-.7433295-.8076266-1.268-.632z"
							/>
							<path
								id="Shape"
								d="m33 23.5c0 .5522847.4477153 1 1 1s1-.4477153 1-1c-.0965423-2.2415987-1.7783513-4.0953727-4-4.409v-.091c0-.5522847-.4477153-1-1-1s-1 .4477153-1 1v.091c-2.2216487.3136273-3.9034577 2.1674013-4 4.409.0965423 2.2415987 1.7783513 4.0953727 4 4.409v4.937c-1.1128409-.2524624-1.9267959-1.2072317-2-2.346 0-.5522847-.4477153-1-1-1s-1 .4477153-1 1c.0965423 2.2415987 1.7783513 4.0953727 4 4.409v.091c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-.091c2.2216487-.3136273 3.9034577-2.1674013 4-4.409-.0965423-2.2415987-1.7783513-4.0953727-4-4.409v-4.937c1.1128409.2524624 1.9267959 1.2072317 2 2.346zm-6 0c.0732041-1.1387683.8871591-2.0935376 2-2.346v4.692c-1.1128409-.2524624-1.9267959-1.2072317-2-2.346zm6 7c-.0732041 1.1387683-.8871591 2.0935376-2 2.346v-4.692c1.1128409.2524624 1.9267959 1.2072317 2 2.346z"
							/>
							<path
								id="Shape"
								d="m51 38h4c.5522847 0 1-.4477153 1-1v-4c0-.5522847-.4477153-1-1-1s-1 .4477153-1 1v3h-3c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1z"
							/>
							<path
								id="Shape"
								d="m5 32c-.55228475 0-1 .4477153-1 1v4c0 .5522847.44771525 1 1 1h4c.55228475 0 1-.4477153 1-1s-.44771525-1-1-1h-3v-3c0-.5522847-.44771525-1-1-1z"
							/>
							<path
								id="Shape"
								d="m9 16h-4c-.55228475 0-1 .4477153-1 1v4c0 .5522847.44771525 1 1 1s1-.4477153 1-1v-3h3c.55228475 0 1-.4477153 1-1s-.44771525-1-1-1z"
							/>
							<path
								id="Shape"
								d="m51 18h3v3c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-4c0-.5522847-.4477153-1-1-1h-4c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1z"
							/>
						</g>
					</svg>
					Cash
				</label>
			</div>
			<span class="payment__indication"> 2. Enter your Card Details </span>

			<span class="payment__indication"> Card Number </span>
			<input
				class="payment__input"
				type="text"
				placeholder="0000-0000-0000-0000"
			/>
			<div class="payment__container payment__container--three">
				<span class="payment__indication"> CVV number </span>
				<span class="payment__indication"> Exp. Month </span>
				<span class="payment__indication"> Exp. Day </span>
				<input
					class="payment__input payment__input--small"
					type="text"
					placeholder="CVV"
				/>
				<select class="payment__input payment__input--small" name="" id="">
					<option value="">month1</option>
					<option value="">month1</option>
					<option value="">month1</option>
				</select>
				<select class="payment__input payment__input--small" name="" id="">
					<option value="">day1</option>
					<option value="">day1</option>
					<option value="">day1</option>
				</select>
			</div>
			<div class="payment__container payment__container--flex">
				<span class="payment__indication payment__indication--my">
					Save card for future payments
				</span>
				<input class="payment__switch" type="checkbox" name="" id="" />
			</div>
			<p class="payment__total">
				Total:
				<span class="payment__total payment__total--price">S/ 99.99</span>
			</p>
		</div>
		<div class="payment__container payment__container--buttons">
			<button class="payment__button">Back</button>
			<button
				class="payment__button payment__button--active"
				@click="toogleView"
			>
				Next
			</button>
		</div>
		<Modal v-if="finish" />
	</div>
</template>

<script>
import { ref } from "vue"

import Modal from "@/components/Modal.vue"

export default {
	name: "payment",
	components: {
		Modal
	},
	setup() {
		let full = ref(false)
		let view = ref(true)
		function toogleView() {
			if(full.value){
				finish.value = true
				return 0
			}
			view.value = !view.value
			full.value = !full.value
		}

		let finish = ref(false)

		return {
			full,
			view,
			toogleView,
			finish
		}
	},
}
</script>

<style src="@/assets/styles/views/payment.scss"></style>
