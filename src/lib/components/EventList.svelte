<script lang="ts">
  	import type SHSMEvent from "$lib/types/SHSMEvent.model";
  	import EventDetail from "./EventDetail.svelte";
  	import SearchBar from "./SearchBar.svelte";

	
	export let events: SHSMEvent[];
</script>

<section class="events">
	<SearchBar/>
	<div class="event-grid">
		{#each events as event}
			<EventDetail {event}/>
		{/each}
	</div>
</section>

<style lang="scss">
	.events {
		padding: 1rem 0;
	}
	
	.event-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		padding: 1rem;
	}
</style>