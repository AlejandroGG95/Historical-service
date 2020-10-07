<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app clipped>
          <v-list dense>
            <v-list-item link :to="'/dashboard'">
              <v-list-item-action>
                <v-icon>mdi-view-dashboard</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Dashboard</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link :to="'/auxiliar'">
              <v-list-item-action>
                <v-icon>mdi-account-hard-hat</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Auxiliar</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link :to="'/settings'">
              <v-list-item-action>
                <v-icon>mdi-cog</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Settings</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-app-bar app clipped-left>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title>Historical service</v-toolbar-title>
        </v-app-bar>

        <v-main>
          <router-view></router-view>
        </v-main>

        <v-footer app>
          <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
      </v-app>
    </v-app>
  </div>
</template>

<script>
import Vuetify from "vuetify";
import { routes } from "./router";

export default {
  name: "App",
  vuetify: new Vuetify(),
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    routes,
  }),
  created() {
    this.$vuetify.theme.dark = true;
  },
};
</script>