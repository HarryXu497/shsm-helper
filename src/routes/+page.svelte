<script lang="ts">
  	import EventList from '$lib/components/EventList.svelte';
  	import Navbar from '$lib/components/Navbar.svelte';
  import type SHSMEvent from '$lib/types/SHSMEvent.model';
	import type { PageServerData } from './$types';
	
	export let data: PageServerData;
	let documents: SHSMEvent[];

	$: {
		documents = data.documents.map(data => data.data)
		documents.forEach(event => event.date = new Date(event.date as unknown as number));
		documents.forEach(console.log)
	}
</script>

<main>
	<section class="top">
		<Navbar/>
		<section class="hero">

		</section>
	</section>

	<section>
		<EventList events={documents}/>
	</section>
</main>

<style lang="scss">
	.top {
		background: linear-gradient(hsla(294, 50%, 30%, 0.3), hsla(294, 50%, 30%, 0.2)), url("header.jpg");
		min-height: 60vh;
		background-size: cover;
	}
</style>