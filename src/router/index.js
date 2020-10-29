import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Index.vue';
import Search from '../views/Search.vue';

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/new',
    name: 'List',
    component: () => import(/* webpackChunkName: "about" */ '../views/Create.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router;
