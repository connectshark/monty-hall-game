<template>
<div class=" py-5">
  <router-link to="/game" class="bg-blue-600 text-white hover:opacity-90 p-4 block w-48 rounded-lg mx-auto text-xl">開始遊戲</router-link>
</div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
    store.commit('shuffle')
    return {

    }
  }
}
</script>