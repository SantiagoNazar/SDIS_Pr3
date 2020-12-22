<template>
  <v-form v-model="valid">
    <v-row>
      <v-text-field
        v-model.number="val"
        label="Gasto"
        :rules="[required]"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-select
        v-model="select"
        :items="items"
        :rules="[required]"
        label="Tipo de gasto"
        required
      ></v-select>
    </v-row>
    <v-row>
      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || '¡Debe estar de acuerdo para continuar!']"
        label="¿Está de acuerdo con los datos introducidos?"
        required
      ></v-checkbox>
      <v-spacer></v-spacer>
      <v-menu
        v-model="abierto"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Fecha"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" @input="abierto = false"></v-date-picker>
      </v-menu>
    </v-row>
    <v-row>
      <v-btn :disabled="!valid" color="success" @click="add"> Submit </v-btn>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: 'Formulario',
  data: () => ({
    abierto: false,
    valid: true,
    val: 0.0,
    select: '',
    date: '',
    checkbox: false,
    items: ['uno', 'dos', 'tres'],
  }),
  methods: {
    required(v) {
      return !!v || 'dato requerido'
    },
    add() {
      this.$emit('input', { f1: this.val, f2: this.select, f3: this.date })
    },
  },
}
</script>

<style scoped></style>
