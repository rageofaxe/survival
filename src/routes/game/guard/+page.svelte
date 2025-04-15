<script>
	import Basket from '$lib/components/Basket.svelte';
	import Description from '$lib/components/Description.svelte';
	import StatusBar from '$lib/components/StatusBar.svelte';
	import LoopController from '$lib/components/LoopController.svelte';
	import ActionBar2 from '$lib/components/ActionBar2.svelte';
	import ActionBasket from '$lib/components/ActionBasketUI.svelte';

	import {
		addAction,
		getActionBasket,
		getAreaActions,
		getAreaDescription,
		getItemBasket,
		getItemsBasketName,
		getResources,
		getTime
	} from '$lib/utils/helper';
	import { load, mission, player } from '$lib/current-game/game';
	import { onMount } from 'svelte';

	onMount(async () => {
		await load(player, mission);
	});

	let time = getTime(mission);
	let resources = getResources(mission);
	let areaDescription = getAreaDescription(mission, player);
	let itemBasket = getItemBasket(player);
	let itemsBasketName = getItemsBasketName(player);
	let actionBasket = getActionBasket(player);
	let addPlayerAction = addAction(player);
	let areaActions = getAreaActions(mission, player);
</script>

<div class="container">
	<div class="column">
		<StatusBar {resources} {time} />
		<div class="row">
			<Description {areaDescription} />
		</div>
		<div class="row">
			<Basket {itemBasket} {itemsBasketName} />
			<ActionBasket {actionBasket} />
			<ActionBar2 addAction={addPlayerAction} {areaActions} />
		</div>
		<LoopController />
	</div>
</div>

<style>
	.container {
		padding: 2rem;
	}
</style>
