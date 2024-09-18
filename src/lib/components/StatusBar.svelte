<script lang="ts">
	import { goto } from '$app/navigation';
	import { mission } from '$lib/current-game/game';
	import { derived } from 'svelte/store';

	let resources = derived(mission, (mission) =>
		Object.values(mission.resources)
			.map(
				(resource) =>
					`${resource.name}: ${
						typeof resource.volume === 'number' ? resource.volume : resource.volume.length
					}`
			)
			.join(' | ')
	);

	let time = derived(mission, (mission) => `${Math.floor(mission.time / 8)}D ${mission.time % 8}H`);

	function quit() {
		goto("/")
	}
</script>

<div class="row">
	<div class="block">
		<div class="justify-between">
			<span class="">{$resources}</span>
			<span class="">{$time}</span>
			<button on:click={quit}>Quit</button>
		</div>
	</div>
</div>

<style>
	.justify-between {
		justify-content: space-between;
		align-items: center;
		display: flex;
	}
</style>
