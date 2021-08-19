<template>
  <div class="Item">
    <img class="Item__image" src="@/assets/images/product.png" alt="item image">
    <div class="Item__container">
      <span class="Item__name">Item name</span>
      <span class="Item__props">Prop1, prop2, prop3.</span>
      <div class="Item__container Item__container--quantity">
        <button class="Item__button">+</button>
        <span class="Item__quantity">99</span>
        <button class="Item__button">-</button>
      </div>
    </div>
    <span class="Item__price">S/ 99.99</span>
    <button class="Item__button Item__button--delete">x</button>
  </div>
</template>

<script>
export default {
  name: "Item",
  setup(){

  }
}
</script>

<style src="@/assets/styles/components/Item.scss">
</style>