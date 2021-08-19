<template>
  <div class="detail">
    <span class="detail__title">Product name</span>
    <Navigation />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue"

export default {
  name: "detail",
  components: {
    Navigation
  },
  setup(){

  }
}
</script>

<style src="@/assets/styles/views/detail.scss">
</style>