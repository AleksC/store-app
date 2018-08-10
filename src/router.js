import Vue from 'vue';
import Router from 'vue-router';

import AppCustomers from './components/AppCustomers';
import AppProducts from './components/AppProducts';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/customers', },
        { path: '/customers', component: AppCustomers },
        { path: '/products', component: AppProducts },
        { path: '/customers/:id', component: AppCustomers, name: 'latest-purchases', props: true },
    ]
});

