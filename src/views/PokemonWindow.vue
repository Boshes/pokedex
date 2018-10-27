<template>
  <div v-if="Object.keys(chosenPokemon).length">
    <div class="poke-box">
      <PokemonPortrait :image="pokemonImage"/>
    </div>
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

<style>
.poke-box {
  border: 5px solid white;
}
</style>
