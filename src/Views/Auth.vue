<template lang="html">
	<div class="Auth">
		<div class="title">
			Connexion
		</div>
		<div class="connections">
			<button type="button" v-on:click="login(github)">Github</button>
			<button type="button" v-on:click="login(google)">Google</button>
		</div>
	</div>
</template>

<script>
import firebase from './../firebase';

export default {
	data: () => {
		return {
			github: new firebase.auth.GithubAuthProvider(),
			google: new firebase.auth.GoogleAuthProvider()
		};
	},
	methods: {
		login: function (provider) {
			firebase.auth()
				.signInWithPopup(provider)
				.then((result) => {})
				.catch((err) => { throw err; });
		}
	}
};
</script>

<style lang="scss" scoped>

/* guud culurz */
$blue1: #3498db;
$blue2: #16a085;
$black: #2c3e50;
$white: #ecf0f1;
$veryWhite: #fff;
$blue: $blue1;

.Auth {
	background: rgba(236, 240, 241, 0.75);
	padding: 0 1em;
	margin: 1em;
}

.title {
	font-size: 2em;
	text-align: center;
	margin: 1rem;
}

.connections {
	display: flex;
	button {
		margin: 1rem;
		padding: 0.75rem;
	}
}

</style>
