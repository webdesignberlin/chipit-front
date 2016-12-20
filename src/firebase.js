import * as firebase from 'firebase';
const config = {
	apiKey: 'AIzaSyAhvZpEQzY5SCCZDmAEV9hyywpuTwe5PvM',
	authDomain: 'chip-on-fire.firebaseapp.com',
	databaseURL: 'https://chip-on-fire.firebaseio.com',
	storageBucket: 'chip-on-fire.appspot.com',
	messagingSenderId: '1099462709184'
};
firebase.initializeApp(config);

export default firebase;
