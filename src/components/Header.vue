<template>
	<header class="Header">
		<router-link  to="/">
			<img class="Header__logo" src="@/assets/images/logo.png" alt="main logo" />
		</router-link>
		<button class="Header__button" @click="emitToogleSidebar">
			<svg class="Header__menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
				<g>
					<path
						d="M492,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,236,492,236z"
					/>
					<path
						d="M492,76H20C8.954,76,0,84.954,0,96s8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,76,492,76z"
					/>
					<path
						d="M492,396H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20
			C512,404.954,503.046,396,492,396z"
					/>
				</g>
			</svg>
		</button>
	</header>
</template>

<script>
export default {
	name: "Header",
	setup(props,ctx){
		function emitToogleSidebar(){
			ctx.emit("toogleSidebar")
		}

		return {
			emitToogleSidebar
		}
	}
}
</script>

<style src="@/assets/styles/components/Header.scss"></style>
