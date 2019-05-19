//client-entry.js
import { createApp } from './main.js';

const { app, router } = createApp()

// this assumes App.vue template root element has `id="app"`
app.$mount('#app')

export function createClient(){
    return {app, router}
}