<script>
	import StatusBar from '$lib/components/StatusBar.svelte';

	import { getTime } from '$lib/utils/helper';
	import { mission } from '$lib/current-game/game';

	import { derived, get } from 'svelte/store';

	import mapImg from '$lib/assets/pr/map.jpg';
	import { getPopulation, getSettlementByPosition } from '$lib/missions/principality/helper';
	import { player } from '$lib/missions/principality/store';
	import Field from './ui/Cell.svelte';
	import Cell from './ui/Cell.svelte';
	import Castle from './ui/Castle.svelte';
	import Village from './ui/Village.svelte';

	const population = getPopulation($player.settlements);

	let time = getTime(mission);
	let resources = derived(mission, (m) => {
		return `Gold: ${m.resources.gold.volume} | Population: ${population}`;
	});
</script>

<div class="container">
	<div class="flex">
		<StatusBar {time} {resources} />
		<div class="row">
			<div class="block" style="background: white">
				<!-- <img src={mapImg} alt="map" width="300" /> -->
				{#each { length: 12 } as r, i}
					<div class="row">
						{#each { length: 16 } as c, j}
							{@const s = getSettlementByPosition($player.settlements, [i, j])}
							{#if s}
								<div class="cell" style="position:relative">
									<Cell />
									{#if s.type === 'Castle'}
										<Castle />
									{/if}
									{#if s.type === 'Village'}
										<Village />
									{/if}
								</div>
							{:else}
								<div class="cell">
									<Cell />
								</div>
							{/if}
						{/each}
					</div>
				{/each}
			</div>
			<div class="block" />
		</div>
	</div>
</div>

<style>
	.container {
		padding: 2rem;
	}

	.row,
	.block {
		gap: 0;
	}

	.cell {
		border: 0;
		box-shadow: none;
		width: auto;
		height: auto;
	}
</style>
