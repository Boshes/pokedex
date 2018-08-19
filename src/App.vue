<template>
  <div id="app">
    <PokemonList class="poke-list" />
    <PokemonDetails class="poke-window" />
  </div>
</template>

<script>
import PokemonDetails from '@/views/PokemonDetails'
import PokemonList from '@/views/PokemonList'

export default {
  components: {
    PokemonDetails,
    PokemonList
  }
}
</script>

<style>
  #app {
    display: grid;
    grid-template-columns: 2fr;
  }

  .poke-list {
    grid-column: 1;
  }

  .poke-window {
    grid-column: 2;
  }
</style>
