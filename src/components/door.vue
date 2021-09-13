<template>
  <div class="door" @click="updateSelect">
    <div class="front bg-yellow-600">
      <span class=" font-mono text-yellow-600 w-10 h-10 rounded-full bg-white absolute top-0 bottom-0 my-auto leading-10">{{index}}</span>
      <span v-if="index === select" class=" absolute top-2 left-2 text-blue-600 text-xl"><i class='bx bx-check-circle'></i></span>
      <span class=" bg-black w-2 h-2 absolute top-0 bottom-0 my-auto left-2 rounded-full"></span>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  props: {
    select: {
      type: [null, Number]
    },
    index: {
      type: Number
    },
    checked: {
      type: Boolean
    }
  },
  emits: ['update:select'],
  setup (props, { emit }) {
    const updateSelect = () => {
      emit('update:select', props.index)
    }

    const store = useStore()
    const award = computed(() => store.getters.whatIAm(props.index - 1))
    return {
      updateSelect,
      award
    }
  }
}
</script>

<style lang="scss" scoped>
.door{
  width: 100px;
  height: 200px;
  background-color: #ccc;
  position: relative;
  perspective: 500px;
  &:hover{
    .front{
      transform: rotateY(20deg);
    }
  }
  .front{
    transition: transform 1s;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    transform-origin: right;
    transform: rotateY(0deg);
  }
}
.open{
  .front{
    transform: rotateY(90deg);
  }
}
</style>