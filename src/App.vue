<template>
    <div class="app">
		<!-- The classic menubar shit -->
		<MenuBar :auth="auth"></MenuBar>

		<!-- The router view of the cool doggo -->
		<router-view></router-view>
    </div>
</template>

<script>
import firebase from './firebase.js';
import MenuBar from './Components/MenuBar.vue';

export default {
	name: 'app',
	data () {
		return {
			auth: false
		};
	},
	components: { MenuBar },
	created () {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				window.auth = this.auth = true;
				this.$router.push('/');
			} else {
				window.auth = this.auth = false;
			}
		});
	}
};

</script>

<style lang='scss'>

/* guud culurz */
$blue1: #3498db;
$blue2: #16a085;
$black: #2c3e50;
$white: #ecf0f1;
$veryWhite: #fff;
$blue: $blue1;

/* monofont, for doing monostuff */
@import url('https://fonts.googleapis.com/css?family=Inconsolata|Roboto:300,400,500');
html,
body {
    font-family: 'Roboto', sans-serif;
    color: $black;
    max-width: 100%;
}

/* gradient bg, make it fixed to not fucked up on scroll */
body {
    background: $blue1;
    background:  -webkit-linear-gradient(left top, $blue1, $blue2);
    background:   -o-linear-gradient(bottom right, $blue1, $blue2);
    background: -moz-linear-gradient(bottom right, $blue1, $blue2);
    background:   linear-gradient(to bottom right, $blue1, $blue2);
    background-attachment: fixed;
}

/* app div cover all the window */
.app {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
	justify-content: flex-start;
	align-items: center;
}

/* Input normalization */
input[type=text] {
	font-family: 'Inconsolata', monospace;
	background: $white;
	border: 2px solid $white;
	padding: 0.3em;
	&:focus {
		outline: none;
		border-color: $blue;
	}
}

/* button & button-like elements normalization */
button, input[type=submit], input[type=button], .button {
	display: block;
	padding: 0.5em 1em;
	box-sizing: border-box;
	background: $white;
	border: 2px solid $white;
	color: inherit;
	font-family: inherit;
	text-transform: none;
	text-decoration: none;
	cursor: pointer;

	&:hover {
		background: $veryWhite;
		border-color: $veryWhite;
	}

	&:active, &:focus {
		outline: none;
		border-color: $blue;
	}
}


label {
	cursor: pointer;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

</style>
