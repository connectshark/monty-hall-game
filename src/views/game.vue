<template>
<div class=" flex items-center justify-around py-5">
  <Door
    v-for="item in 3"
    :key="item"
    :index="item"
    :checked="checked"
    v-model:select="select"
  />
</div>
<div>
  <input v-if="select !== null" @click="checked = true" type="button" value="決定好囉!" class="ring-blue-400 focus:ring-4 cursor-pointer bg-blue-600 text-white p-5 rounded-2xl">
</div>
</template>

<script>
import { ref } from 'vue'
import Door from '../components/door.vue'
export default {
  components: {
    Door
  },
  setup () {
    const select = ref(null)
    const checked = ref(false)
    return {
      select,
      checked
    }
  }
}
</script>