<template>
  <v-card>
    <v-card-title>
      Pacientes
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      item-key="name"
      class="elevation-1"
      v-if="desserts.length <= 0"
      loading
      loading-text="Loading... Please wait"
    ></v-data-table>

    <v-data-table
      :headers="headers"
      v-if="desserts.length > 0"
      :items="desserts"
      :search="search"
      :sort-by="['name', 'habitacion', 'contacto']"
      @click:row="getInfo"
    >
      <template v-slot:item.tipologia="{ item }">
        <v-chip :color="getColor(item.tipologia)" dark>{{
          item.tipologia
        }}</v-chip>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    axios.get("http://localhost:3000/historic/searchAll").then((respuesta) => {
      console.log("Respuesta", respuesta.data);
      this.desserts = respuesta.data;
    });
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Nombre",
          align: "start",
          /* sortable: false, */
          value: "name",
        },
        {
          text: "Apellidos",
          align: "start",
          /* sortable: false, */
          value: "lastname",
        },
        { text: "Tipologia", value: "tipologia" },
        { text: "Habitacion", value: "habitacion" },
        { text: "Contacto", value: "contacto" },
      ],
      desserts: [],
    };
  },
  methods: {
    getColor(tipologia) {
      if (tipologia === "Alta") return "red";
      else if (tipologia === "Media") return "orange";
      else return "green";
    },
    getInfo(value) {
      console.log(value);
      let result = axios
        .post("http://localhost:3000/historic/searchOne", { id: value._id })
        .then((respuesta) => {
          console.log("Respuesta", respuesta.data);
          return respuesta.data;
        });
      console.log(result);
    },
  },
};
</script>
<style scoped>
</style>