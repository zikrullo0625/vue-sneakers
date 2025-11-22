<template>
  <div class="px-17 py-13 text-xl ">
  <div class="flex w-full rounded-3xl bg-[#F4EFE9]">
      <div class="basis-[30%] flex flex-col">
        <div class="px-4 py-3">
          <img src="../../public/adidasanddisney.png" class="w-35">
        </div>
        <div class="flex flex-col justify-center items-center flex-1">
          <div class="text-5xl text-center">
            <b class="text-[#8BB43C]">Stan Smith<span class="text-gray-900">,</span></b><br>
            <b class="text-gray-900">Forever!</b>
          </div>
          <button class="w-50 h-15 rounded-full text-white uppercase font-bold bg-[#A5D364] mt-6">
            Купить
          </button>
        </div>
      </div>

      <div class="flex-1">
        <img src="../../public/kermit.png" class="w-full h-full object-cover">
      </div>
    </div>

    <div>
      <div class="flex justify-between mt-10">
        <h1 class="font-bold text-4xl">Все кроссовки</h1>
        <div class="flex items-center border-1 border-gray-300 rounded-xl px-3 py-2 w-80 bg-white">
          <i class="fas fa-search text-gray-400 mr-2"></i>
          <input
              type="text"
              placeholder="Поиск..."
              class="flex-1 outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>


      <div class="grid grid-cols-4 gap-10 mt-10">
        <CardItem v-for="sneaker in sneakers" :name="sneaker.title" :price="sneaker.price" :img="sneaker.imageUrl" :isLiked="sneaker.isLiked ?? false" :isInCart="sneaker.isInCart ?? false" />
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import CardItem from "@/components/CardItem.vue";

export default {
  components: {CardItem},
  data() {
    return {
      sneakers: []
    }
  },
  mounted() {
    this.fetchSneakers()
  },
  methods: {
    fetchSneakers() {
      this.sneakers = axios.get("https://65d2b71462995284.mokky.dev/items")
          .then((res) => {
            this.sneakers = res.data
          })
    }
  }
}
</script>