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

import { mapActions, mapState} from 'vuex'
import Formulario from '~/components/Formulario'
import Tabla from '~/components/Tabla'
export default {
  name: 'pruebaFormularioVuex',
  components: { Formulario, Tabla },
  data: () => ({
  }),
  computed: {
      ...mapState('modelo', ['items'])
  },
  methods: {
    ...mapActions('modelo', ['add', 'remove', 'initialize'])
  },
  async fetch(){
      await this.initialize()
  }
}
</script>

<style scoped></style>