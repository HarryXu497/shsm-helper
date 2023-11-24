<script lang="ts">
	import { auth } from "$lib/stores/auth.store";
</script>

<header class="header">
	{$auth?.type === "student" ? "Student" : "Teacher"} View
</header>

<style lang="scss">
	header {
		position: absolute;
		
		top: 0;
		left: clamp(16rem, 25vw, 20rem);
		right: 0;
		
		padding: 2rem 2rem;

		background-color: var(--color-secondary);
		color: black;
	}
</style>