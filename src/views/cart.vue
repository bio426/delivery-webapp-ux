<template>
	<div id="cart">
		cart view
		{{ num }} -- store
	</div>
</template>

<script>
import { computed } from "vue"
import { useStore } from "vuex"

export default {
	name: "cart",
	setup() {
		const store = useStore()

		return {
			num: computed(() => store.state.num),
		}
	},
}
</script>

<style></style>
