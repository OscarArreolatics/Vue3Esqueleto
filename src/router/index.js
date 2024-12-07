
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHashHistory } from 'vue-router/auto';
import { useAuthStore } from '@/stores/auth';
import HomePage from '@/pages/HomePage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import AboutPage from '@/pages/AboutPage.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: { requiresAuth: true },  // Indica que esta ruta requiere autenticación
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage, 
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage, 
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})



router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (sessionStorage.getItem("SesionIniciada")) {
    authStore.isLoggedIn = true;
  }
  
  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    next({ name: 'Login' });  // Redirige al login si no está autenticado
  } else {
    next();  // Permite el acceso a la ruta
  }
});

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
