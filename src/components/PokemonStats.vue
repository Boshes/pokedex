<template>
  <div>
    <p>{{ details.order }} - {{ details.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    details: {
      required: true,
      type: Object
    }
  }
}
</script>
