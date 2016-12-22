<template lang="html">
	<div class="LCD">
		<div class="title">LCD</div>

		<form v-on:submit.prevent="submitPlz">
			<LineInput label="Ligne 1" v-model="line1" v-bind:class="{ modified: line1 != line1Pristine }"></LineInput>
			<LineInput label="Ligne 2" v-model="line2" v-bind:class="{ modified: line2 != line2Pristine }"></LineInput>

			<div class="checkbox">
				<label for="blink">Clignotement</label>
				<label @keyup.enter.space="clickCheckbox('blink')" tabindex="0" for="blink" class="cuteCheckbox"><div :class="{ cacheTaJoie:blink }"></div></label>
				<input v-on:change="checkboxPlz('blink')" v-model="blink" type="checkbox" id="blink"/>
			</div>

			<div class="checkbox">
				<label for="screenOn">Allumé</label>
				<label @keyup.enter.space="clickCheckbox('on')" tabindex="0" for="screenOn" class="cuteCheckbox"><div :class="{ cacheTaJoie:on }"></div></label>
				<input v-on:change="checkboxPlz('on')" v-model="on" type="checkbox" id="screenOn"/>
			</div>
			<div class="buttonRow">
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
			blink: false,
			on: true,
			line1Pristine: null,
			line2Pristine: null
		};
	},
	created: function () {
		/**
		 * Read value on firebase; put it to the pristine value guard.
		 * if the pristine is sync with the display value, update both.
		 */
		database.ref('chip/lcd').on('value', (snapshot) => {
			const lcd = snapshot.val();
			this.on = lcd.on;
			this.blink = lcd.blink;
			if (this.line1 === this.line1Pristine) {
				this.line1 = this.line1Pristine = lcd.message.line1;
			} else {
				this.line1Pristine = lcd.message.line1;
			}
			if (this.line2 === this.line2Pristine) {
				this.line2 = this.line2Pristine = lcd.message.line2;
			} else {
				this.line2Pristine = lcd.message.line2;
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
				.ref('chip/lcd/message')
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
		},
		checkboxPlz: function (thatBox) {
			database
				.ref(`chip/lcd/${thatBox}`)
				.set(this[thatBox])
				.catch((err) => {
					throw err;
				});
		},
		clickCheckbox: function (thatBox) {
			this[thatBox] = !this[thatBox];
			this.checkboxPlz(thatBox);
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

.LCD {
	display: flex;
	flex-direction: column;
}

.checkbox {
	display: flex;
	align-items: center;
	margin: 0.5em 0;
		label {
		display: block;
	}
	input {
		display: none;
	}
	.cuteCheckbox {
		box-sizing: border-box;
		width: 1.6em;
		height: 1.6em;
		background: $white;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		border: 2px solid $white;
		&:focus {
			border-color: $blue;
			outline: none;
		}

		&>div {
			width : 0em;
			height: 0em;
			transition: 0.1s;
			background: $blue;
			&.cacheTaJoie {
				width : 1em;
				height: 1em;
			}
		}
	}

}

.buttonRow {
	display: flex;
	justify-content: space-around;
	margin: 1em;
}


</style>
