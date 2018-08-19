<template>
  <tr @click="getPokemonDetails()">
    <span>{{ pokemon.name }}</span>
  </tr>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  props: {
    pokemon: {
      required: true,
      type: Object
    }
  },

  methods: {
    ...mapActions('pokemon', ['fetchPokemon']),

    getPokemonDetails () {
      this.fetchPokemon(this.pokemon.name)
    }
  }
}
</script>
