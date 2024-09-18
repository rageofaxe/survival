<script lang="ts">
	import { player } from '$lib/current-game/game';
	import { derived } from 'svelte/store';

	let basket = derived(player, (p) => p.actionBasket as App.BasketAction);
</script>

<div class="block">
	<div class="flex">
		<span class="l">{$basket.name} (size: {$basket?.actions.length} / {$basket.size})</span>
		<div class="row">
			{#each $basket?.actions as a}
				<button>{a.name}</button>
			{/each}
		</div>
	</div>
</div>

