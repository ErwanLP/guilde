import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import localforage from 'localforage';


Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {requiresAuth: true}
        },
        {
            path: '/login',
            name: 'login',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/Login.vue'),
        },
        {
            path: '/servers',
            name: 'servers',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/Servers.vue'),
            meta: {requiresAuth: true}
        },
        {
            path: '/servers/:id',
            name: 'server',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/Server.vue'),
            meta: {requiresAuth: true}
        },
    ],
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        localforage.getItem('USER_UID', (err, uid) => {
            if (err || !uid) {
                next({name: 'login'})
            } else {
                next()
            }
        });
    } else {
        next()
    }
})

export default router
