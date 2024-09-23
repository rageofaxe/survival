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
	} from '$lib/utils/helper';
	import { mission } from '$lib/current-game/game';
	import { player1, player2 as headPlayer, player3 } from '$lib/missions/quake/store'
	import MultiPoolController from '$lib/components/MultiPoolController.svelte';
	import UserCard from '$lib/components/UserCard.svelte';
	import { getTime } from '$lib/missions/quake/helper';
	import AutoTimer from '$lib/components/AutoTimer.svelte';
	import ActionBar from '$lib/components/ActionBar.svelte';

	let time = getTime(mission);
	let resources = getResources(mission);
	let areaDescription = getAreaDescription(mission, player1);
	
	let areaActions1 = getAreaActions(mission, player1);
	let actionBasket1 = getActionBasket(player1);
	let addPlayerAction1 = addAction(player1);

	let areaActions2 = getAreaActions(mission, headPlayer);
	let actionBasket2 = getActionBasket(headPlayer);
	let addPlayerAction2 = addAction(headPlayer);

	let actionBasket3 = getActionBasket(player3);
	let addPlayerAction3 = addAction(player3);
	let areaActions3 = getAreaActions(mission, player3);
	
</script>

<div class="container">
	<div class="flex">
		<StatusBar {time} {resources} />
		<div class="row">
			<Description {areaDescription} />
		</div>
		
		<div class="row">
			<UserCard player={headPlayer} />
			<ActionBasket actionBasket={actionBasket2} />
			<ActionBar2 addAction={addPlayerAction2} areaActions={areaActions2} />
		</div>
		<div class="row">
			<UserCard player={player1} />
			<ActionBar player={player1} mission={mission} />
		</div>
		<AutoTimer mission={mission} players={[player1, headPlayer, player3]} />
	</div>
</div>

<style>
	.container {
		padding: 2rem;
	}
</style>
