// client-entry.js
import createApp from './main';

const { app, router } = createApp();

// this assumes App.vue template root element has `id="app"`
app.$mount('#app');

export default function createClient() {
  return { app, router };
}
