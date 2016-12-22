<template lang="html">
	<div class="LineInput">
		<label v-bind:for="id">{{ label }}</label>
		<input v-bind:id="id" type="text" :value="value" v-on:input="onInput">
	</div>
</template>

<script>
export default {
	props: [ 'value', 'label' ],
	data: () => {
		return {
			id : Math.random().toString(36).substr(2, 9)
		}
	},
	methods: {
		onInput: function (event) {
			this.$emit('input', event.target.value)
		}
	}
}
</script>

<style lang="scss" scoped>
	.LineInput {
		// width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0.5em 0;

		input {
			flex-grow: 1;
		}
		&.modified input{
			// border-color: #f1c40f;
			color: darken(#f39c12, 10%);;
		}
	}
</style>
