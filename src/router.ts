import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/found',
      name: 'found',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Found.vue'),
    },
    {
      path: '/FoundDetail',
      name: 'FoundDetail',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/FoundDetail.vue'),
    },
    {
      path: '/mine',
      name: 'mine',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Mine.vue'),
    },
    {
      path: '/Edetail',
      name: 'Edetail',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/EDetail.vue'),
    },
    {
      path: '/homedetail',
      name: 'homedetail',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/HomeDetail.vue'),
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Login.vue'),
    },
  ],
});
