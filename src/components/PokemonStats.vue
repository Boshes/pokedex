<template>
  <table>
    <tbody>
      <tr>
        <th>Number</th>
        <td>{{ details.order }}</td>
      </tr>
      <tr>
        <th>Name</th>
        <td>{{ details.name }}</td>
      </tr>
    </tbody>
  </table>
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
