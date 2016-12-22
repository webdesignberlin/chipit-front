<template lang="html">
	<div class="ControlBoard">
		<LCD class="boardElement"/>
	</div>
</template>

<script>
import LCD from '../components/LCD.vue';

export default {
	components: {
		LCD
	}
};
</script>

<style lang="scss">
.ControlBoard {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
	box-sizing: border-box;
}

/* Base for all board element! */
.boardElement {
	margin: 1.5rem;
	box-sizing: border-box;
	padding: 0 1em;
	background: rgba(236, 240, 241, 0.75);
	&>.title {
		margin: 1rem;
		text-align: center;
		font-size: 1.5em;
		font-weight: bold;
		text-transform: capitalize;
	}
}

/* normalize label */
label {
	width: 100px;
}

</style>
