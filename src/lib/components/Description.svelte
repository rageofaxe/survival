<script lang="ts">
	import { mission, player } from '$lib/current-game/game';

	let position = $player.position
	$: text = $mission.map.areas[position]?.description
</script>

<div class="block">
	<span class="">
		<pre>{text}</pre>
	</span>
	<button class="">Got it</button>
</div>
