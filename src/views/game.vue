<template>
<div class=" flex items-center justify-around py-5">
  <Door
    v-for="item in 3"
    :key="item"
    :index="item"
    :draw="draw"
    v-model:select="select"
  />
</div>
<div>
  <input v-if="!decide" @click="userChecked" type="button" value="決定好囉!" class="ring-blue-400 focus:ring-4 cursor-pointer bg-blue-600 text-white p-5 rounded-2xl">
  <input v-else @click="draw = true" type="button" value="公布解答" class="ring-blue-400 focus:ring-4 cursor-pointer bg-blue-600 text-white p-5 rounded-2xl">
</div>
</template>

<script>
import { ref } from 'vue'
import Door from '../components/door.vue'
import { useStore } from 'vuex'
export default {
  components: {
    Door
  },
  setup () {
    const select = ref(1)
    const decide = ref(false)
    const store = useStore()
    const userChecked = () => {
      if (!decide.value) {
        store.commit('checked', select.value)
        decide.value = true
      }
    }

    const draw = ref(false)
    return {
      select,
      decide,
      userChecked,
      draw
    }
  }
}
</script>