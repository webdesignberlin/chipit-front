<template lang="html">
	<div class="LCD">
		<div class="title">LCD</div>

		<form v-on:submit.prevent="submitPlz">
			<LineInput label="Ligne 1" v-model="line1" v-bind:class="{ modified: line1 != line1Pristine }"></LineInput>
			<LineInput label="Ligne 2" v-model="line2" v-bind:class="{ modified: line2 != line2Pristine }"></LineInput>

			<div class="submitButton">
				<input type="submit" name="validate" value="Valider">
				<button type="button" v-on:click="pristinePlz">Re-Sync</button>
			</div>
		</form>

	</div>
</template>

<script>
import LineInput from './../Components/LineInput.vue';
import firebase from './../firebase';

const database = firebase.database();

export default {
	components: {
		LineInput
	},
	data: () => {
		return {
			line1: null,
			line2: null,
			line1Pristine: null,
			line2Pristine: null
		};
	},
	created: function () {
		/**
		 * Read value on firebase; put it to the pristine value guard.
		 * if the pristine is sync with the display value, update both.
		 */
		database.ref('message').on('value', (snapshot) => {
			if (this.line1 === this.line1Pristine) {
				this.line1 = this.line1Pristine = snapshot.val().line1;
			} else {
				this.line1Pristine = snapshot.val().line1;
			}
			if (this.line2 === this.line2Pristine) {
				this.line2 = this.line2Pristine = snapshot.val().line2;
			} else {
				this.line2Pristine = snapshot.val().line2;
			}
		});
	},
	methods: {
		submitPlz: function (event) {
			// Prepare the message
			const message = {
				line1: this.line1 ? this.line1 : '',
				line2: this.line2 ? this.line2 : ''
			};

			// Send the message
			database
				.ref('message')
				.set(message)
				.then((wut) => {
					this.line1Pristine = this.line1;
					this.line2Pristine = this.line2;
				})
				.catch((err) => {
					throw err;
				});
		},
		pristinePlz: function () {
			this.line1 = this.line1Pristine;
			this.line2 = this.line2Pristine;
		}
	}
};
</script>

<style lang="scss" scoped>
	.LCD {
		box-sizing: border-box;
		padding: 10px 20px;
		background: rgba(236, 240, 241, 0.75);
		display: flex;
		flex-direction: column;
	}

	.title {
		margin: 0 10px;
		text-align: center;
		font-size: 1.5em;
		font-weight: bold;
		text-transform: capitalize;
	}

	.submitButton {
		display: flex;
		justify-content: space-around;

	}


</style>
