<template>
  <div>
    <v-card elevation="2">
      <v-card-text>
        <formulario @input="add"></formulario>
      </v-card-text>
    </v-card>
    <tabla :items="items" class="mt-5"></tabla>
  </div>
</template>

<script>

import Formulario from '~/components/Formulario'
import Tabla from '~/components/Tabla'
export default {
  name: 'pruebaFormulario',
  components: { Formulario, Tabla },
  data: () => ({
    items:[
    ]
  }),
  methods: {
    add(v){
      this.items.push(v)
    }
  }
}
</script>

<style scoped></style>
