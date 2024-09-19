<script>
	import Basket from '$lib/components/Basket.svelte';
	import Description from '$lib/components/Description.svelte';
	import StatusBar from '$lib/components/StatusBar.svelte';
	import LoopController from '$lib/components/LoopController.svelte';
	import ActionBar from '$lib/components/ActionBar.svelte';
	
	import Ascii from '$lib/components/Ascii.svelte';
	import { addAction, getActionBasket, getAreaActions, getAreaDescription, getItemBasket, getItemsBasketName, getResources, getTime } from '../../../utils/helper';
	import { mission, player } from '$lib/current-game/game';

	let time = getTime(mission);
	let resources = getResources(mission);
	let areaDescription = getAreaDescription(mission, player)
	let itemBasket = getItemBasket(player)
	let itemsBasketName = getItemsBasketName(player)
	let actionBasket = getActionBasket(player)
	let addPlayerAction = addAction(player)
	let areaActions = getAreaActions(mission)
</script>

<div class="container">
	<div class="flex">
		<StatusBar {resources} {time} />
		<div class="row">
			<Ascii />
			<Description {areaDescription} />
		</div>
		<div class="row">
			<Basket {itemBasket} {itemsBasketName} />
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
