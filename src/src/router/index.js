import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home';
import Sponsor from '@/pages/Sponsorship';
import MitoLicence from '@/pages/licences/MitoLicence';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      component: Home,
      path: '/',
    },
    {
      component: Sponsor,
      path: '/sponsor',
    },
    {
      component: Home,
      path: '/home',
    },
    {
      component: MitoLicence,
      path: '/mitoLicence',
    },
  ],
});
