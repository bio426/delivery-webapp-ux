<template>
  <div class="Product" @click="goTo">
    <img class="Product__image" src="@/assets/images/product.png" alt="product image">
    <span class="Product__name">Product name</span>
    <button class="Product__add">+</button>
    <span class="Product__price">S/9.99 - S/0.00</span>
    <p class="Product__description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, atque?
    </p>
  </div>
</template>

<script>
import {useRouter} from "vue-router"

export default {
  name: "Product",
  setup(){
    const router = useRouter()

    function goTo(){
      router.push("/detail")
    }

    return {
      goTo
    }
  }
}
</script>

<style src="@/assets/styles/components/Product.scss">
</style>