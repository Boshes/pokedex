<template>
  <img :src="image"/>
</template>

<script>
export default {
  props: {
    image: {
      required: true,
      type: String
    }
  }
}
</script>

<style>
img {
  height: 500px;
}
</style>
