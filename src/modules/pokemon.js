import * as api from '@/utils/api'

export default {
  namespaced: true,

  state: {
    chosenPokemon: {},
    pokemon: [],
    offset: 0
  },

  getters: {
    chosenPokemon: state => state.chosenPokemon,
    pokemon: state => state.pokemon,
    offset: state => state.offset
  },

  actions: {
    fetchPokemonList ({ commit }, offset) {
      return api.GET(`pokemon/?limit=50&offset=${offset}`).then((result) => {
        commit('SET_POKEMON_LIST', result.data.results)
        commit('SET_OFFSET', offset)
      })
    },

    fetchPokemon ({ commit }, name) {
      return api.GET(`pokemon/${name}`).then((result) => {
        commit('SET_POKEMON', result.data)
      })
    }
  },

  mutations: {
    SET_POKEMON_LIST (state, pokemon) {
      state.pokemon = pokemon
    },

    SET_OFFSET (state, offset) {
      state.offset = offset
    },

    SET_POKEMON (state, pokemon) {
      state.chosenPokemon = pokemon
    }
  }
}
