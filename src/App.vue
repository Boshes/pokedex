<template>
  <div id="app">
    <div id="scanlines">
      <div id="content">
        <PokemonList class="poke-list" />
        <PokemonWindow class="poke-window" />
        <PokemonDetails class="poke-details" />
      </div>
    </div>
  </div>
</template>

<script>
import PokemonList from '@/views/PokemonList'
import PokemonWindow from '@/views/PokemonWindow'
import PokemonDetails from '@/views/PokemonDetails'

export default {
  components: {
    PokemonList,
    PokemonWindow,
    PokemonDetails,
  }
}
</script>

<style>
#app {
  height: 100vh;
}

#content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 200px;
  grid-template-areas: "portrait list"
                       "details details";
  grid-auto-flow: dense;
  grid-gap: 10px;
}

.poke-list {
  grid-area: list;
}

.poke-window {
  grid-area: portrait;
  justify-self: center;
  align-self: center;
}

.poke-details {
  grid-area: details;
}

#scanlines {
  position: relative;
  overflow: hidden;
  background: black;
}
#scanlines::before, #scanlines::after {
  display: block;
  pointer-events: none;
  content: '';
  position: absolute;
}
#scanlines::before {
  width: 100%;
  height: 20%;
  z-index: 5;
  background: rgba(255, 255, 255, 0.2);
  animation: scanline 4s linear infinite;
}
#scanlines::after {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  animation: scanlines 10s linear infinite;
  background: linear-gradient(to bottom, transparent 50%, rgba(255, 255, 255, 0.2) 51%);
  background-size: 100% 4px;
}

@keyframes scanlines {
  0% {
    background-position: 0 50%;
  }
}

@keyframes scanline {
  0% {
    top: -20%;
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  80% {
    opacity: 0;
  }
  100% {
    top: 100%;
    opacity: 0;
  }
}
</style>
