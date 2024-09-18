<script>
	import Basket from '$lib/components/Basket.svelte';
	import Description from '$lib/components/Description.svelte';
	import StatusBar from '$lib/components/StatusBar.svelte';
	import LoopController from '$lib/components/LoopController.svelte';
	import ActionBar from '$lib/components/ActionBar.svelte';
	
	import Ascii from '$lib/components/Ascii.svelte';
</script>

<div class="container">
	<div class="flex">
		<StatusBar />
		<div class="row">
			<Ascii />
			<Description />
		</div>
		<div class="row">
			<Basket />
			<ActionBar />
		</div>
		<LoopController />
	</div>
</div>

<style>
	.container {
		padding: 2rem;
	}
</style>
