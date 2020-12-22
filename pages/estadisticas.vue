<template>
  <div>
    <v-select
        v-model="select"
        :items="categories"
        :rules="[required]"
        label="Tipo de gasto"
        required
      ></v-select>
    <v-card class="mt-6 mx-auto" max-width="800">
      <v-sheet
        class="v-sheet--offset mx-auto"
        color="cyan"
        elevation="12"
        max-width="calc(100% - 32px)"
      >
        <v-sparkline
          :labels="meses"
          :value="agrupados"
          color="white"
          line-width="2"
          padding="16"
        ></v-sparkline>
      </v-sheet>

      <v-card-text class="pt-0">
        <div class="title font-weight-light mb-2">Gráfica de gastos</div>
        <v-divider class="my-2"></v-divider>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Formulario from "~/components/Formulario";
import Tabla from "~/components/Tabla";

export default {
  data: () => ({
    select: "",
    meses: [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ],
  }),
  computed: {
    ...mapState("modelo", ["items", "categories"]),
    filtrado() {
      return this.items.filter((item) => this.select == item.f2);
    },
    agrupados() {
      return this.meses.map((mes) => this.totalMes(mes));
    },
  },
  methods: {
    totalMes(mes) {
      return this.filtrado
        .filter((item) => item.f3.substring(5, 7) == mes)
        .map((item) => item.f1)
        .reduce((a, b) => a + b, 0);
    },
    ...mapActions('modelo', ['initialize'])
  },
  async fetch(){
      await this.initialize()
  }
};
</script>

<style>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>