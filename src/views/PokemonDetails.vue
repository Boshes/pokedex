<template>
  <div v-if="Object.keys(chosenPokemon).length">
    <div class="poke-stats">
      <PokemonStats :details="chosenPokemon"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PokemonStats from '@/components/PokemonStats'

export default {
  components: {
    PokemonStats
  },

  computed: {
    ...mapGetters('pokemon', ['chosenPokemon']),

    pokemonImage () {
      return this.chosenPokemon.sprites.front_default
    }
  }
}
</script>

<style>
.poke-stats {
  border: 5px solid white;
  background: white;
}
</style>
