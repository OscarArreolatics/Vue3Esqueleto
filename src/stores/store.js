import { defineStore } from 'pinia';
import { ref } from 'vue'

export const useStorePrincipal = defineStore('principal', () => {
    const fecha = ref(null);
    const name = ref(import.meta.env.VITE_APP_TITLE)
    const urlExit = ref(import.meta.env.VITE_URL_EXIT);
 
  
    return {name, fecha, urlExit }
  })