<template>
<div class=" py-5">
  <router-link to="/game" class="bg-blue-600 text-white hover:opacity-90 p-4 block w-48 rounded-lg mx-auto text-xl">開始遊戲</router-link>
</div>
<div class="bg-white w-11/12 mx-auto p-2 border border-gray-300 rounded-xl">
  <h2 class=" text-2xl text-gray-900">遊戲說明</h2>
  <p class=" text-xl text-gray-700">三扇門後其中一扇是車車，另外兩扇門後是山羊</p>
  <p class=" text-xl text-gray-700">在選擇其中一扇門後會打開另一隻山羊的門，同時你擁有更換選擇的權利</p>
  <p class=" text-xl text-gray-700">祝最後贏得車車</p>
</div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
    store.commit('shuffle')
  }
}
</script>