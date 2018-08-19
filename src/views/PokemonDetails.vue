<template>
  <div v-if="Object.keys(chosenPokemon).length">
    <PokemonPortrait :image="pokemonImage"/>
    <PokemonStats :details="chosenPokemon"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PokemonPortrait from '@/components/PokemonPortrait'
import PokemonStats from '@/components/PokemonStats'

export default {
  components: {
    PokemonPortrait,
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
