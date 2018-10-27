<template>
  <div v-if="pokemon.length && Object.keys(chosenPokemon).length">
    <ul class="poke-entries">
      <PokemonRow v-for="pokemon in pokemon" :key="pokemon.url" :pokemon="pokemon"/>
    </ul>
    <PokemonNavigate @page-navigate="pageNavigate"/>
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

<style>
.poke-entries {
  font-size: 28px;
  list-style-type: none;
  max-height: 500px;
  overflow-y: scroll;
  padding: 0;
}
</style>
