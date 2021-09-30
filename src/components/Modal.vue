<template>
  <div class="Modal">
    <div class="Modal__main">
      <div class="Modal__container">
        <h2 class="Modal__display">Thank you!</h2>
        <p class="Modal__info">Your order has been succesfully added</p>
        <span class="Modal__info Modal__info--dark">Estimated delivery time: </span>
        <span>30 min</span>
        <router-link class="Modal__link" to="/">To home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  setup() {
    
  },
}
</script>

<style src="@/assets/styles/components/Modal.scss">
</style>