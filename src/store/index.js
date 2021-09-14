import { createStore } from 'vuex'

const store = createStore({
  state: {
    award: ['car', 'goat', 'empty'],
    checked: null
  },
  mutations: {
    shuffle: (state) => {
      state.award.sort(() => Math.random() - 0.5)
      state.checked = null
    },
    checked: (state, payload) => {
      state.checked = payload
    }
  },
  getters: {
    isOpen: state => doorIndex => {
      if (state.checked === null) return false
      if (state.award[state.checked - 1] === 'goat') {
        return state.award[doorIndex - 1] === 'empty'
      } else {
        return state.award[doorIndex - 1] === 'goat'
      }
    }
  }
})

export default store