<template lang="html">
	<div class="Magicbox">
		<div class="title">C.H.I.P Playground</div>

		<form v-on:submit.prevent="submitPlz">
			<!-- modified: Class a enleve ou mettre quand on aura validation des donnee -->
			<LineInput label="Ligne 1" v-model="line1" v-bind:class="{ modified: line1 != line1Pristine }"></LineInput>
			<LineInput label="Ligne 2" v-model="line2" v-bind:class="{ modified: line2 != line2Pristine }"></LineInput>

			<div class="submitButton">
				<input type="submit" name="validate" value="Valider">
				<button type="button" v-on:click="line1 = line1Pristine; line2 = line2Pristine;">Cancel</button>
			</div>
		</form>

	</div>
</template>

<script>
import LineInput from './LineInput.vue'
import firebase from './../firebase'

const database = firebase.database();
// console.log(firebase);

export default {
	components : { LineInput },
	data: () => {
		return {
			line1: null,
			line2: null,
			line1Pristine: null,
			line2Pristine: null
		}
	},
	methods: {
		submitPlz: function (event) {
			// Prepare the message
			let message = {
				line1: this.line1 ? this.line1 : '',
				line2: this.line2 ? this.line2 : '',
			}

			// Send the message
			database
				.ref('message')
				.set(message)
				.then((wut) => {
					this.line1Pristine = this.line1;
					this.line2Pristine = this.line2;
				})
				.catch((err)=>{
					console.error(err);
				});
		}
	}
}
</script>

<style lang="scss">
	.Magicbox {
		padding: 1.5rem 3rem;
		background: rgba(236, 240, 241, 0.9);
		display: flex;
		flex-direction: column;
	}

	.title {
		font-size: 2em;
		text-align: center;
		font-weight: bold;
		text-transform: capitalize;
		margin: 0 0 0.5rem 0;
	}

	.submitButton {
		display: flex;
		justify-content: space-around;
		input, button {
			padding: 0.5em 1em;
			cursor: pointer;
		}
	}

	input, button {
		background: #ecf0f1;
		border: 2px solid #ecf0f1;
		&:focus {
			outline: none;
			border-color: #3498db !important;
		}
	}
</style>
