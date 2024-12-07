<template>
  <div class="text-uppercase text-black py-3 border-b text-h6 bg-white">
    <v-row class="px-8 py-4">
      <v-col cols="12" md="auto" class="pa-0">
        {{ store.name }}
      </v-col>
      <v-spacer></v-spacer>

      <v-col cols="6" class="d-flex align-center justify-center" md="auto"> {{ store.fecha }} </v-col>
      <v-col cols="6" class="d-flex align-center justify-center" md="1">
        <NavSpeedDial />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { useStorePrincipal } from "@/stores/store.js";
import NavSpeedDial from "./NavSpeedDial.vue";

const store = useStorePrincipal();
</script>

<style></style>
