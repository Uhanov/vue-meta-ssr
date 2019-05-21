import Vue from 'vue';
import Router from 'vue-router';
import VueMeta from 'vue-meta';
import Home from '../components/Home.vue';
import FAQ from '../components/FAQ.vue';

Vue.use(Router);
Vue.use(VueMeta);

export default function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Home },
      { path: '/faq', component: FAQ }
    ]
  });
}
