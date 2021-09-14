<template>
<div class=" flex items-center justify-around py-10 max-w-xl mx-auto">
  <Door
    v-for="item in 3"
    :key="item"
    :index="item"
    :draw="draw"
    v-model:select="select"
  />
</div>
<div class="py-5 md:inline-block block mx-2.5">
  <div v-if="!decide" @click="userChecked" class="btn bg-blue-700">決定好囉!</div>
  <div v-else @click="result" class="btn bg-yellow-700">公布解答</div>
</div>
<div class="py-5" v-if="tip">
  <p class=" text-red-400 text-3xl">{{tip}}</p>
</div>
<router-link to="/" class="btn bg-green-700 md:inline-block block mx-2.5">再玩一次</router-link>
</template>

<script>
import { computed, ref } from 'vue'
import Door from '../components/door.vue'
import { useStore } from 'vuex'
export default {
  components: {
    Door
  },
  setup () {
    const select = ref(1)
    const decide = ref(false)
    const tip = ref('')
    const store = useStore()
    const award = computed(() => store.state.award)
    const userChecked = () => {
      if (!decide.value) {
        store.commit('checked', select.value)
        decide.value = true
      }
    }

    const draw = ref(false)
    const result = () => {
      draw.value = true
      const reward = award.value[select.value - 1]
      if (reward === 'car') {
        tip.value = '恭喜獲得車車'
      } else if (reward === 'goat') {
        tip.value = '騎山羊'
      } else {
        tip.value = '沒東西'
      }
    }
    return {
      select,
      decide,
      userChecked,
      result,
      draw,
      tip
    }
  }
}
</script>