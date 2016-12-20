<template>
    <div class="app">
		<div class="menuTop">
			<div class="title">
				C.H.I.P on <span>Fire<span>base</span></span>
			</div>
			<div class="buttons">
				<button v-if="auth">
					<router-link to="logout">Log Out</router-link>
				</button>
			</div>
		</div>
        <div class="MagicboxContainer">
			<router-view></router-view>
        </div>
    </div>
</template>

<script>
import firebase from './firebase.js';

export default {
	name: 'app',
	data () {
		return {
			auth: false
		};
	},
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

/* monofont, for doing monostuff */
@import url('https://fonts.googleapis.com/css?family=Inconsolata|Roboto:300,400,500');
html,
body {
    font-family: 'Roboto', sans-serif;
    color: #2c3e50;
    max-width: 100%;
}

/* guud culurz */
$blue1: #3498db;
$blue2: #16a085;

/* Background stuff */
body {
    background: $blue1;
    background:  -webkit-linear-gradient(left top, $blue1, $blue2);
    background:   -o-linear-gradient(bottom right, $blue1, $blue2);
    background: -moz-linear-gradient(bottom right, $blue1, $blue2);
    background:   linear-gradient(to bottom right, $blue1, $blue2);
    background-attachment: fixed;
}

.app {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
}

.MagicboxContainer {
    align-self: center;
    max-width: 100%;
    box-sizing: border-box;
    padding: 20px;
}

.menuTop {
	padding: 0.5em 1em;
	background: rgba(236, 240, 241, 0.75);
	display: flex;
	justify-content: space-between;
	align-items: center;

	.title {
		font-weight: 100;
		font-size: 1.5em;
		span {
			font-weight: 400;
			color: #e74c3c;
			span {
				font-weight: 100;
			}
		}
	}

	.buttons {
		button{
			padding: 0;
			a {
				box-sizing: border-box;

				text-transform: none;
				text-decoration: none;
				display: block;
				padding: 0.5em 1em;
				width: 100%;
				height: 100%;
				color: inherit;
				&:visited {
					color: inherit;
				}
			}
		}
	}
}

/* Input stuff */
input, button {
	font-family: 'Inconsolata', monospace;
	background: #ecf0f1;
	border: 2px solid #ecf0f1;
	padding: 0.5em 1em;
	&:focus {
		outline: none;
		border-color: #3498db !important;
	}
}
button, input[type=submit], input[type=button] {
	font-family: inherit;
	cursor: pointer;
	&:active {
		background: darken(#ecf0f1, 10%);
	}
}
</style>
