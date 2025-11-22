<script>
export default {
  props: {
    name: String,
    price: Number,
    img: String,
    isLiked: Boolean,
    isInCart: Boolean
  }
}
</script>

<template>
  <div class="border border-gray-300 rounded-4xl shadow px-7 pb-5 flex flex-col justify-center items-center relative">
    <img v-if="!isLiked" src="/like-1.svg" alt="" class="absolute top-4 left-4 z-10 w-10">
    <img v-else src="/like-2.svg" alt="" class="absolute top-6 left-6 z-10 w-14">

    <img :src="img" alt="" class="w-full mb-3">

    <p class="text-base mb-4">{{name}}</p>

    <div class="flex justify-between w-full items-center">
      <div class="flex flex-col">
        <p class="text-gray-400 text-sm">ЦЕНА:</p>
        <b class="">{{price}} руб.</b>
      </div>
      <div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
        <img v-if="!isInCart" src="/plus.svg" class="object-fill w-full">
        <img v-else src="/checked.svg" class="object-fill w-full">
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>