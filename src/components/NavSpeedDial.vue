<template>
  <v-speed-dial location="bottom left" transition="slide-x-transition">
    <template v-slot:activator="{ props: activatorProps }">
      <v-fab v-bind="activatorProps" icon="mdi-menu" variant="plain"></v-fab>
    </template>

    <v-btn v-for="(item, index) in menu"
      :key="index"
      :icon="item.icon"
      class="text-subtitle-1"
      :class="index == 0?'mt-6': '' "
      :to="{ name: item.to }"
    >
      <v-icon  :icon="item.icon"></v-icon>
      <v-tooltip activator="parent" location="start">{{ item.tooltip }}</v-tooltip>
    </v-btn>

    <!-- boton logout -->
    <v-btn 
      v-if="storeAuth.isLoggedIn"
      :key="menu.length+1"
      class="text-subtitle-1"
      icon="mdi-exit-to-app"
      @click="logoutClick()"
    >
      <v-icon  icon="mdi-exit-to-app"></v-icon>
      <v-tooltip activator="parent" location="start">Cerrar Session</v-tooltip>
    </v-btn>
  </v-speed-dial>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth.js";
import { useRouter } from "vue-router";

const router = useRouter();
const storeAuth = useAuthStore();

const menu = [
  { icon: "mdi-home-outline", tooltip: "Inicio", to: "Home" },
  { icon: "mdi-information-outline", tooltip: "Acerca de", to: "About" },
];

function logoutClick() {
  storeAuth.logout();
  router.push("/login");
}
</script>

<style></style>
