/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

// Composables
import { createApp } from 'vue'

//store
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

// cambia el titulo de la app
document.title = import.meta.env.VITE_APP_TITLE;

registerPlugins(app)

app.use(Toast, { transition: "Vue-Toastification__fade" })
app.use(pinia)
app.mount('#app')
