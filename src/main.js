import * as normalize from 'normalize.css'; // eslint-disable-line
import Vue from 'vue';
import router from './router.js';
import App from './App.vue';
import firebase from './firebase.js';

window.auth = false;

firebase.auth().onAuthStateChanged((user) => {
	if (user) window.auth = true;
	else window.auth = false;
	console.log(window.auth);
});

new Vue({
	router,
	el: '#app',
	render: h => h(App)
});
