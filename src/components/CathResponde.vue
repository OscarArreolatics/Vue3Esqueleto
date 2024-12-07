<template>
    <v-snackbar 
        v-model="show" 
        :timeout="timeout"
        :top="x == 'top'" 
        :bottom="x == 'bottom'" 
        :right="y == 'right'"
        :left="y == 'left'"
        :multi-line="mode === 'multi-line'"
        :vertical="mode === 'vertical'"
        :color="color"
    > 
        {{ text }}
        <template v-slot:actions>
        <v-btn text :color="colorBtnClose" @click="show = false">Cerrar</v-btn>
        </template>
    </v-snackbar>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useNotificationStore } from '@/stores/catchRes'

const notificationStore = useNotificationStore()

// Usamos `storeToRefs` para crear las referencias a las propiedades reactivas del store
const { show, text, timeout, mode, x, y, color, colorBtnClose } = storeToRefs(notificationStore)


</script>
