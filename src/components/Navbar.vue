<template>
  <header class="flex justify-between p-10 items-center border-b-2 border-b-[#EAEAEA]">
    <div class="cursor-pointer flex items-center justify-center gap-3" @click="$router.push('/')">
      <img src="/logo.png" alt="Logo" class="w-10">
      <div>
        <h1 class="font-bold text-xl uppercase">Vue Sneakers</h1>
        <p class="opacity-50">Мазагин лучших кроссовок</p>
      </div>
    </div>
    <div class="flex gap-9">
      <div class="flex items-center gap-3">
        <img src="/cart.svg" alt="">
        <span class="text-gray-500 font-semibold">1205 руб.</span>
      </div>
      <div class="flex items-center gap-3">
        <img src="/heart.svg" alt="">
        <span class="text-gray-500">Закладки</span>
      </div>
      <div class="flex items-center gap-3">
        <img src="/profile.svg" alt="">
        <span class="text-gray-500">Профиль</span>
      </div>
    </div>
  </header>
</template>
<script>
</script>