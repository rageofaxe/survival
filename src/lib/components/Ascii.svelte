<script lang="ts">
	import { mission, player } from '$lib/current-game/game';

	let position = $player.position
	$: ascii = $mission.map.areas[position]?.ascii
</script>

<div class="block map">

	<pre>{ascii}</pre>
</div>

<style>
	.map {
		width: 66vw;
		height: 30vh;
		flex: 2;
		align-items: center;
		justify-content: center;
	}

	pre {
		font-size: 2rem;
	}
</style>
