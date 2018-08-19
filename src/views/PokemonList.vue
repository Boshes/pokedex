<template>
  <div v-if="pokemon.length && Object.keys(chosenPokemon).length">
    <table>
      <PokemonNavigate @page-navigate="pageNavigate"/>
      <PokemonRow v-for="pokemon in pokemon" :key="pokemon.url" :pokemon="pokemon"/>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PokemonRow from '@/components/PokemonRow'
import PokemonNavigate from '@/components/PokemonNavigate'

export default {
  components: {
    PokemonRow,
    PokemonNavigate
  },

  data () {
    return {
    }
  },

  computed: {
    ...mapGetters('pokemon', ['pokemon', 'offset', 'chosenPokemon'])
  },
  created () {
    this.fetchPokemonList(this.offset)
    this.fetchPokemon('bulbasaur')
  },

  methods: {
    ...mapActions('pokemon', ['fetchPokemonList', 'fetchPokemon']),

    pageNavigate (direction) {
      let offset = direction === 'previous' ? this.offset - 50 : this.offset + 50
      if (offset <= 0) {
        offset = 0
      } else if (offset >= 671){
        offset = 671
      }
      this.fetchPokemonList(offset)
    }
  }
}
</script>
