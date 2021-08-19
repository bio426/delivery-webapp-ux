<template>
  <div class="user">
    <span class="user__title">Account</span>
    <img class="user__photo" src="@/assets/images/product.png" alt="user photo">
    <div class="user__container">
      <div class="user__info" v-for="i in 8" :key="i">
        Your name
        <span class="user__value">John</span>
      </div>
    </div>
    <div class="user__container user__container--buttons">
      <button class="user__button">Back</button>
      <button class="user__button user__button--active">Edit</button>
    </div>
    <div class="user__spacer"></div>
    <Navigation />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue"

export default {
  name: "user",
  components:{
    Navigation
  },
  setup(){

  }
}
</script>

<style src="@/assets/styles/views/user.scss">
</style>