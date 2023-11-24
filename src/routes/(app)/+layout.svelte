<script>
  import SideBar from "$lib/components/SideBar.svelte";

</script>

<section>
	<SideBar/>
	<slot/>
</section>

<style lang="scss">
	section {
		position: relative;
	}
</style>