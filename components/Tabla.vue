<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
  name: 'Tabla',
  props: {
    items: {
      type: Array,
      value: () => []
    }
  },
  data: () => ({
    headers: [
      { text: 'Fecha', value: 'f3' },
      { text: 'Tipo de gasto', value: 'f2' },
      { text: 'Gasto', value: 'f1' }
    ]
  })
}
</script>

<style scoped></style>
