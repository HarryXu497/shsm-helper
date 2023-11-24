<script lang="ts">

</script>

<nav class="sidebar">
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/events">Events</a></li>
	</ul>
</nav>

<style lang="scss">
	.sidebar {
		background-color: var(--color-primary);
		position: fixed;
		left: 0;
		bottom: 0;
		top: 0;
		width: clamp(16rem, 20%, 20rem);
		padding: 2rem;
	}

	.sidebar a {
		all: unset;
		color: white;
	}
</style>