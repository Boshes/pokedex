<template>
  <li
    class="poke-item"
    :class="{ 'active': this.isChosen }"
    @click="getPokemonDetails()"
  >
    <span>{{ pokemonNumber(pokemon.url) }} {{ pokemon.name }}</span>
  </li>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    pokemon: {
      required: true,
      type: Object
    }
  },

  computed: {
    ...mapGetters('pokemon', ['chosenPokemon']),

    isChosen () {
      return this.pokemon.name === this.chosenPokemon.name
    }
  },

  methods: {
    ...mapActions('pokemon', ['fetchPokemon']),

    pokemonNumber (url) {
      return url.split('/').slice(-2)[0]
    },

    getPokemonDetails () {
      this.fetchPokemon(this.pokemon.name)
    }
  }
}
</script>

<style>
.poke-item {
  background-color: #EBE5CD;
  border: 2px solid #EBE5CD;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  margin: 8px;
  padding-left: 8px;
  text-transform: uppercase;
}
.active {
  background-color: #f9f8ce;
  border: 2px solid #f9f8ce;
}
</style>
