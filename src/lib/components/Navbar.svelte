<script lang="ts">
	
</script>

<header class="header">
	<nav class="nav">
		<div class="nav__logo">
			MYSHSM
		</div>
		<div class="nav__links">
			<ul>
				<li><a href="/log-in">Log In</a></li>
				<li><a href="/sign-up">Sign Up</a></li>
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

		background-color: var(--color-primary);
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
</style>