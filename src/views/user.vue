<template>
  <div class="user">
    <span class="user__title">Account</span>
    <img class="user__photo" src="@/assets/images/product.png" alt="user photo">
    <div class="user__container">
      <div class="user__info">
        Your name
        <span class="user__value">John</span>
      </div>
      <div class="user__info">
        Your surname
        <span class="user__value">Alex</span>
      </div>
      <div class="user__info">
        Phone number
        <span class="user__value">999-888-777</span>
      </div>
      <div class="user__info">
        Country
        <span class="user__value">Spain</span>
      </div>
      <div class="user__info">
        Town
        <span class="user__value">Málaga</span>
      </div>
      <div class="user__info">
        Saved Cards
        <span class="user__value">></span>
      </div>
      <div class="user__info">
        Order History
        <span class="user__value">></span>
      </div>
    </div>
    <div class="user__container user__container--buttons">
      <button class="user__button">Back</button>
      <button class="user__button user__button--active">Edit</button>
    </div>
    <div class="user__spacer"></div>
  </div>
</template>

<script>
export default {
  name: "user",
  setup(){

  }
}
</script>

<style src="@/assets/styles/views/user.scss">
</style>