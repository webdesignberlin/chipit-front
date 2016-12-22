<template lang="html">
	<div class="menuBar">

		<div class="title">
			C.H.I.P on <span>Fire<span>base</span></span>
		</div>

		<div class="actions">
			<router-link class="button" to="logout" v-if="auth">Log Out</router-link>
		</div>

	</div>
</template>

<script>
export default {
	props: ['auth']
};
</script>

<style lang="scss" scoped>
.menuBar {
	width: 100%;
	display: flex;
	padding: 0.5em 1em;
	justify-content: space-between;
	box-sizing: border-box;
	align-items: center;
	background: rgba(236, 240, 241, 0.75);
}

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

.actions {
	display: flex;
}
</style>
