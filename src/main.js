import '../src/Style/CSS/BorderRStyle.css';
import '../src/Style/CSS/BorderStyle.css';
import '../src/Style/CSS/HeightStyle.css';
import '../src/Style/CSS/MarginStyle.css';
import '../src/Style/CSS/PaddingStyle.css';
import '../src/Style/CSS/TransformStyle.css';
import '../src/Style/CSS/TransitionStyle.css';
import '../src/Style/CSS/WidthStyle.css';
import '../src/Style/SCSS/Style.scss';
import './style.css';

import { autoAnimatePlugin } from '@formkit/auto-animate/vue';
import Aura from '@primevue/themes/aura';
import { MotionPlugin } from '@vueuse/motion';
import { createPinia } from 'pinia';
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import { createApp } from 'vue';
import App from './App.vue';

import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './router/routes.js';

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});

const router = createRouter({
  history: createWebHistory(),
  routes
});

app.use(router);
app.use(ToastService);
app.use(MotionPlugin);
app.use(createPinia());
app.use(autoAnimatePlugin);
app.mount('#app');
