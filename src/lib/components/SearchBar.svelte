<script lang="ts">
	let value = "";
</script>

<div>
	<i class="ri-search-line"></i>
	<input type="text">
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: row;
		width: clamp(20rem, 50%, 60rem);
		margin: 0 auto;
		background-color: white;
		box-shadow: 0 3px 5px rgba(0, 0, 0, 0.25);

		i {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			padding: 0.5rem;
			font-size: 1.25rem;
		}

		input {
			all: unset;
			flex-grow: 1;
			width: 100%;
			padding: 0.75rem 0;
		}
	}
</style>