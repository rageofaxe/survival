<script>
	import Basket from '$lib/components/Basket.svelte';
	import Description from '$lib/components/Description.svelte';
	import StatusBar from '$lib/components/StatusBar.svelte';
	import LoopController from '$lib/components/LoopController.svelte';
	import ActionBar2 from '$lib/components/ActionBar2.svelte';
	import ActionBasket from '$lib/components/ActionBasketUI.svelte';
</script>

<div class="container">
	<div class="flex">
		<StatusBar />
		<div class="row">
			<!-- <Map /> -->
			<Description />
		</div>
		<div class="row">
			<Basket />
			<ActionBasket />
			<ActionBar2 />
		</div>
		<LoopController />
	</div>
</div>

<style>
	.container {
		padding: 2rem;
	}
</style>
