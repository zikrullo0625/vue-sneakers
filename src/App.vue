<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>

<template>
  <div class="w-4/5 bg-white rounded-3xl m-auto shadow-xl mt-14">
    <Navbar />
    <router-view />
  </div>
</template>