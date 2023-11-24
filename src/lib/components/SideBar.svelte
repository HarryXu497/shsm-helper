<script lang="ts">

</script>

<nav class="sidebar">
	<div class="img">
		<img src="shsmlogo.png" alt="SHSM Logo">
	</div>
	<ul class="links">
		<li><a href="/">Home</a></li>
		<li><a href="/student/events">Events</a></li>
		<li><a href="/student/progress">Progress</a></li>
	</ul>
</nav>

<style lang="scss">
	.sidebar {
		background-color: var(--color-primary);
		position: fixed;
		left: 0;
		bottom: 0;
		top: 0;
		width: clamp(16rem, 20vw, 20rem);
		padding: 2rem;

		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.sidebar a {
		all: unset;
		color: white;
	}

	.img, .img img {
		width: 100%;
	}

	.img {
		border-radius: 50%;
		overflow: hidden;
		aspect-ratio: 1 / 1;

		width: 60%;
	
	}

	.links {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;

		font-size: 1.25rem;
	}

</style>