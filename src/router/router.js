import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import FAQ from '../components/FAQ.vue';

import VueMeta from 'vue-meta'

Vue.use(Router);
Vue.use(VueMeta)

export function createRouter () {
    return new Router({
        mode: 'history',
        routes: [
            { path: '/', component: Home },
            { path: '/faq', component: FAQ }
        ]
    });
}