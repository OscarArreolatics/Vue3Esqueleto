<template>
  <v-container>
    <div class="d-flex align-center flex-column">
      <v-card width="80%" class="rounded-lg">
        <v-card-title
          class="text-subtitle-1 text-center text-blue-darken-4 text-uppercase"
        >
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-center">
              {{ store.name }}
            </v-col>
          </v-row>
          <v-icon
            icon="mdi-close"
            class="position-absolute top-0 right-0 ma-1 cursor-pointer"
            @click="logoutClick()"
          ></v-icon>
        </v-card-title>
        <v-card-text>
          <div class="text-h1 text-center">Bienvenido</div>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script setup>
import { useStorePrincipal } from "@/stores/store.js";
import { useAuthStore } from "@/stores/auth.js";

const store = useStorePrincipal();
const storeAuth = useAuthStore();

function logoutClick() {
  storeAuth.logout();
  window.location.replace(store.urlExit);
}
</script>
