<template lang="html">
	<div class="Magicauth">
		<div class="title">
			Connexion
		</div>
		<div class="buttonWrap">
			<div class="button"><button type="button" v-on:click="login(github)">Github</button></div>
			<div class="button"><button type="button" v-on:click="login(google)">Google</button></div>
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
.Magicauth {
	box-sizing: border-box;
	padding: 10px 10px;
	background: rgba(236, 240, 241, 0.75);
	display: flex;
	flex-direction: column;
	.title {
		margin: 0 10px;
		text-align: center;
		font-size: 1.5em;
		font-weight: bold;
		text-transform: capitalize;
	}
	.buttonWrap {
		display: flex;
		flex-wrap: wrap;
		&>div {
			margin: 10px
		}
	}
}
</style>
