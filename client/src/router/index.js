import Vue from 'vue';
import VueRouter from 'vue-router';
import Admin from '../views/Admin.vue';
import Process from '../views/Process.vue';
import Process2 from '../views/Process2.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
  },
  {
    path: '/',
    name: 'Process',
    component: Process,
  },
  {
    path: '/process2',
    name: 'Process2',
    component: Process2,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
