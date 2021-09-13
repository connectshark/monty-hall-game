import { createStore } from 'vuex'

const store = createStore({
  state: {
    award: ['car', 'goat', 'empty']
  },
  mutations: {
    shuffle: (state) => {
      state.award.sort(() => Math.random() - 0.5)
    }
  },
  getters: {
    whatIAm: state => index => {
      return state.award[index]
    }
  }
})

export default store