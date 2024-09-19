<script lang="ts">
	import { type Readable } from 'svelte/store';

	export let actionBasket: Readable<App.BasketAction>
</script>

<div class="block">
	<div class="flex">
		<span class="l">{$actionBasket.name} (size: {$actionBasket?.actions.length} / {$actionBasket.size})</span>
		<div class="row">
			{#each $actionBasket?.actions as a}
				<button>{a.name}</button>
			{/each}
		</div>
	</div>
</div>

