<template>
	<Header @toogleSidebar="toogleSidebar" />
	<router-view />
	<Navigation />
	<Sidebar v-if="sidebarState" @hideSidebar="toogleSidebar" />
</template>

<script>
import {ref} from "vue"

import Header from "@/components/Header.vue"
import Navigation from "@/components/Navigation.vue"
import Sidebar from "@/components/Sidebar.vue"

export default {
	components: {
		Header,
		Navigation,
		Sidebar
	},
	setup() {
		let sidebarState = ref(false)
		function toogleSidebar(){
			sidebarState.value = !sidebarState.value
		}

		return {
			sidebarState,
			toogleSidebar
		}
	},
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&display=swap");

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Montserrat", sans-serif;
}
</style>
