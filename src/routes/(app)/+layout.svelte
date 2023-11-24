<script>
  import Banner from "$lib/components/Banner.svelte";
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