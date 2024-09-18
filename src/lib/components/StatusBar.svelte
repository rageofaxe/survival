<script lang="ts">
	import { mission } from "$lib/current-game/game";
	import { derived } from "svelte/store";

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
</script>

<div class="row">
	<div class="block">
		<span class="">{$resources}</span>
		<span class="">{$time}</span>
	</div>
</div>
