<style scoped>
.tituloclient {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  text-align: center;
}
</style>

<template>
  <v-form v-model="valid">
    <v-container class="d-flex flex-row">
      <v-col cols="11" md="10">

        <v-row cols="12" md="12">
          <v-col cols="12" md="12" class="tituloclient">
            <h3>Datos del cliente</h3>
          </v-col>
        </v-row>

        <v-row cols="12" md="12">
          <v-col cols="4" md="3">
            <v-text-field v-model="dni" :rules="dniRules" :counter="9" label="DNI/NIE/NIF" required></v-text-field>
          </v-col>

          <v-col cols="3" md="3">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="Nombre"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="3" md="4">
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="100"
              label="Apellidos"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="4" md="2">
            <v-text-field v-model="edad" :rules="edadRules" :counter="3" label="Edad" required></v-text-field>
          </v-col>
        </v-row>

        <v-row cols="12" md="12">
          <v-col cols="12" md="3">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="date" label="Fecha de Nacimiento" v-bind="attrs" v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-col class="d-flex" cols="4" sm="2">
            <v-select :items="sexo" label="Sexo"></v-select>
          </v-col>
          <v-col class="d-flex" cols="4" sm="3">
            <v-select :items="items" label="Estado Civil"></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="nss" :rules="ssbRules" :counter="3" label="Nº S.S" required></v-text-field>
          </v-col>
        </v-row>


        <v-row cols="12" md="12">
          <v-col cols="12" md="4">
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          </v-col>
        </v-row>

        <v-row cols="12" md="12">
          <v-col cols="12" md="12" class="tituloclient">
            <h3>Datos de alojamiento</h3>
          </v-col>
        </v-row>

        <v-row cols="12" md="12">
          <v-col cols="12" md="2">
            <v-text-field
              v-model="nhab"
              :rules="habRules"
              :counter="3"
              label="Nº Habitación"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="2">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="date" label="Fecha de Ingreso" v-bind="attrs" v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
        </v-row>

      </v-col>
      
      <v-col cols="2" md="2">
        <v-col cols="10" md="10">
          <v-img
            width="100%"
            height="40%"
            :src="`https://blogs.funiber.org/wp-content/uploads/2016/04/2-perfil-ancianos.jpg`"
            :lazy-src="`https://blogs.funiber.org/wp-content/uploads/2016/04/2-perfil-ancianos.jpg`"
            aspect-ratio="1"
            class="grey lighten-2"
          ></v-img>
        </v-col>
        <v-col cols="2" md="2"></v-col>
      </v-col>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      "Soltero/a",
      "Comprometido/a",
      "Casado/a",
      "Pareja de hecho",
      "Separado/a",
      "Viudo/a",
    ],
    sexo: ["Hombre", "Mujer", "Otros"],
    /* date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false, */
  }),
};
</script>