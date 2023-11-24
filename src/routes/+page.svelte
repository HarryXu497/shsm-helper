<script lang="ts">
  	import Navbar from '$lib/components/Navbar.svelte';
	import type { PageServerData } from './$types';
	
	export let data: PageServerData;
</script>

<Navbar/>
{#each data.documents as document}
	{JSON.stringify(document)}
{/each}