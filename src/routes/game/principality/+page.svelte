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
		getTime,
		removeActionByIndex
	} from '$lib/utils/helper';
	import { mission } from '$lib/current-game/game';
	import MultiPoolController from '$lib/components/MultiPoolController.svelte';
	import UserCard from '$lib/components/UserCard.svelte';
	import { derived, get } from 'svelte/store';

	import mapImg from '$lib/assets/pr/map.jpg';
	import { getPopulation } from '$lib/missions/principality/helper';
	import { player } from '$lib/missions/principality/store';

	const population = getPopulation($player.settlements);

	let time = getTime(mission);
	let resources = derived(mission, (m) => {
		return `Gold: ${m.resources.gold.volume} | Population: ${population}`;
	});

	// let areaDescription = getAreaDescription(mission, player1);

	// let areaActions1 = getAreaActions(mission, player1);
	// let actionBasket1 = getActionBasket(player1);
	// let addPlayerAction1 = addAction(player1);
	// let removeActionByIndex1 = removeActionByIndex(player1);

	// let areaActions2 = getAreaActions(mission, headPlayer);
	// let actionBasket2 = getActionBasket(headPlayer);
	// let addPlayerAction2 = addAction(headPlayer);
	// let removeActionByIndex2 = removeActionByIndex(headPlayer);

	// let actionBasket3 = getActionBasket(player3);
	// let addPlayerAction3 = addAction(player3);
	// let areaActions3 = getAreaActions(mission, player3);
	// let removeActionByIndex3 = removeActionByIndex(player3);
</script>

<div class="container">
	<div class="flex">
		<StatusBar {time} {resources} />
		<div class="row">
			<div class="block">
				<img src={mapImg} alt="map" width="300" />
			</div>
		</div>
		<!-- <div class="row">
			<Description {areaDescription} />
		</div> -->

		<!-- <div class="row">
			<UserCard player={headPlayer} />
			<ActionBasket removeActionByIndex={removeActionByIndex2} actionBasket={actionBasket2} />
			<ActionBar2 addAction={addPlayerAction2} areaActions={areaActions2} />
		</div>
		<div class="row">
			<UserCard player={player1} />
			<ActionBasket removeActionByIndex={removeActionByIndex1} actionBasket={actionBasket1} />
			<ActionBar2 addAction={addPlayerAction1} areaActions={areaActions1} />
		</div>

		<div class="row">
			<UserCard player={player3} />
			<ActionBasket removeActionByIndex={removeActionByIndex3} actionBasket={actionBasket3} />
			<ActionBar2 addAction={addPlayerAction3} areaActions={areaActions3} />
		</div>
		<MultiPoolController {mission} players={[player1, headPlayer, player3]} /> -->
	</div>
</div>

<style>
	.container {
		padding: 2rem;
	}
</style>
