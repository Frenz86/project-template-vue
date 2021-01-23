import Vue from 'vue';
import VueRouter from 'vue-router';
import riassunto from '../views/riassunto.vue';
import infovaluation from '../views/infovaluation.vue';
import bilancio from '../views/bilancio.vue';
import indici from '../views/indici.vue';
import medie from '../views/medie.vue';
import multipli from '../views/multipli.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/riassunto',
    name: 'riassunto',
    component: riassunto,
  },
  {
    path: '/',
    name: 'infovaluation',
    component: infovaluation,
  },
  {
    path: '/bilancio',
    name: 'bilancio',
    component: bilancio,
  },
  {
    path: '/indici',
    name: 'indici',
    component: indici,
  },
  {
    path: '/medie',
    name: 'medie',
    component: medie,
  },
  {
    path: '/multipli',
    name: 'multipli',
    component: multipli,
  }, 
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
