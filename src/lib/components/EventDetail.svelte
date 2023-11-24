<script lang="ts">
  import type SHSMEvent from "$lib/types/SHSMEvent.model";
  export let event: SHSMEvent;

  $: description =
    event.description.length > 140
      ? event.description.slice(0, 140) + "..."
      : event.description.slice(0, 140);
</script>

<div class="event">
  <h3>{event.name}</h3>
  <p>{event.date.toDateString()}</p>
  <ul>
    {#each event.sector as sector}
      <li class="badge sector">{sector}</li>
    {/each}
    {#each event.cert as cert}
      <li class="badge cert">{cert}</li>
    {/each}
  </ul>
  <p>{description}</p>
</div>

<style lang="scss">
	h3 {
		font-weight: bold;
	}

	.event {
		box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.4);
		padding: 1rem;
		background-color: white;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		border-radius: 5px;
	}

	ul {
		display: flex;
		flex-direction: row;
		gap: 0.125rem;
	}

	.badge {
		border-radius: 1rem;
		padding: 0 1rem;
		font-size: 0.9rem;

		&.sector {
			background-color: var(--color-primary);
			color: white;
		}

		&.cert {
			background-color: var(--color-primary);
			color: white;
		}
	}
</style>
