import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = ref(false);

  function login() {
    isLoggedIn.value = true;
    sessionStorage.setItem("SesionIniciada", "1");
  }

  function logout() {
    isLoggedIn.value = false;
    sessionStorage.removeItem("SesionIniciada");
  }

  return { isLoggedIn, login, logout };
});