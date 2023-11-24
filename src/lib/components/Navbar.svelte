<script lang="ts">
	
</script>

<header class="header">
	<nav class="nav">
		<div class="nav__logo">
			<a href="/">MYSHSM</a>
		</div>
		<div class="nav__links">
			<ul>
				<li><a href="/login">Log In</a></li>
				<li><a href="/signup">Sign Up</a></li>
			</ul>
		</div>
	</nav>
</header>

<style lang="scss">
	header {
		top: 0;
		left: 0;
		right: 0;
		
		padding: 2rem 2rem;

		background-color: var(--color);
		color: white;
	}

	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		a {
			all: unset;
		}
	}

	.nav__logo {
		font-weight: bold;
		font-size: 1rem;
	}

	.nav__links ul {

		display: flex;
		flex-direction: row;
		gap: 0.5rem;
	}

	a:hover {
		cursor: pointer;
	}
</style>