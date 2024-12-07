<template>
  <v-app>
    <v-main class="bg-grey-lighten-4">
      <AppHeader/>
      <router-view />
      <CathResponde/>
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<script setup>
import { useStorePrincipal } from "@/stores/store.js";
import { useNotificationStore } from "@/stores/catchRes";
import { onMounted } from "vue";
import configuracion from "@/api/configuracion.js";

const store = useStorePrincipal();
const storeCatch = useNotificationStore();

onMounted(async () => {
    store.fecha = await configuracion.ObtenerFecha().catch((error) => {
      storeCatch.showNotification(error);
    });
});

</script>
