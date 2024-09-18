<script lang="ts">

	import {mission, player} from "$lib/current-game/game"

	let position = $player.position
	let actions = $mission.map.areas[position].actions;
</script>

<div class="block">
	{#each actions as {name, action}}
		<button
			on:click={() => {
				if (action) {
					action();
				}
			}}>{name}</button
		>
	{/each}
</div>
