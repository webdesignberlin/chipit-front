import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from './firebase';

import ControlBoard from './Views/ControlBoard.vue';
import Auth from './Views/Auth.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'hash',
	routes: [
		{
			name: 'ControlBoard',
			path: '/',
			component: ControlBoard
		},
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
