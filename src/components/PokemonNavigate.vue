<template>
  <div>
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
</style>
