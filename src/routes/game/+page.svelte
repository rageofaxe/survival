<script>
	import { derived } from 'svelte/store';
	import ActionBar from '$lib/components/ActionBar.svelte';
	import Basket from '$lib/components/Basket.svelte';
	import Description from '$lib/components/Description.svelte';
	import Map from '$lib/components/Map.svelte';
	import StatusBar from '$lib/components/StatusBar.svelte';

	import missions from '$lib/missions';

	let mission = missions["guard"]

	let resources = derived(mission, (mission) => Object
		.values(mission.resources)
		.map((resource) => `${resource.name}: ${typeof resource.volume === "number" ? resource.volume : resource.volume.length}`)
		.join(" | ")
	)
</script>

<div class="flex">
	<StatusBar resources={$resources} />
	<div class="row">
		<Map mission={$mission} />
		<Description text={$mission.map.areas[0].description} />
	</div>
	<div class="row">
		<Basket />
		<ActionBar mission={$mission} />
	</div>
</div>
