<template>
  <div
    class="door"
    @click="updateSelect"
    :class="[{ open: checked || draw }, showImg]"
  >
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
      type: Number
    },
    index: {
      type: Number
    },
    draw: {
      type: Boolean
    }
  },
  emits: ['update:select'],
  setup (props, { emit }) {
    const store = useStore()
    const checked = computed(() => store.getters.isOpen(props.index))

    const updateSelect = () => {
      if (!checked.value && !props.draw) {
        emit('update:select', props.index)
      }
    }

    const img = computed(() => store.state.award)

    const showImg = computed(() => {
      if (props.draw || checked.value) {
        return img.value[props.index - 1]
      } else {
        return ''
      }
    })
    return {
      updateSelect,
      checked,
      showImg
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
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
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
    transform: rotateY(80deg);
  }
}
.open-all{
  .front{
    transform: rotateY(80deg);
  }
}
.goat{
  background-image: url('../assets/img/goat.png');
}
.car{
  background-image: url('../assets/img/car.png');
}
.empty{
}
</style>