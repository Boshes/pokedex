<template>
  <div class="navigation-buttons">
    <button class="previous" @click="pageNavigate('previous')">Back</button>
    <button class="next" @click="pageNavigate('next')">Next</button>
  </div>
</template>
<script>
export default {
  methods: {
    pageNavigate (direction) {
      this.$emit('page-navigate', direction)
    }
  }
}
</script>

<style>
.navigation-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.previous {
  grid-column: 1;
}
.next {
  grid-column: 2;
}
</style>
