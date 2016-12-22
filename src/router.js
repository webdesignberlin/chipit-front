import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from './firebase';

import Lcd from './Views/LCD.vue';
import Auth from './Views/Auth.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'hash',
	routes: [
		{
			name: 'login',
			path: '/login',
			beforeEnter (to, from, next) {
				if (window.auth) {
					firebase.auth().signOut();
				}
				next();
			},
			component: Auth
		},
		{
			name: 'logout',
			path: '/logout',
			beforeEnter (to, from, next) {
				if (window.auth) {
					firebase.auth().signOut();
				}
				next();
			},
			component: Auth
		},
		{
			name: 'lcd',
			path: '/lcd',
			component: Lcd,
			alias: '/'
		}
	]
});

router.beforeEach((to, from, next) => {
	if (window.auth || to.name === 'login') {
		next();
	} else {
		next({ path: '/login' });
	}
});

export default router;
