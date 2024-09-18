<script lang="ts">
	import { mission, player } from '$lib/current-game/game';
	import { tail } from 'ramda';
	import { derived } from 'svelte/store';

	let actions = derived(mission, (m) => m.map.areas[0].actions);

	function addAction(action: App.Action) {
		player.update((p) => {
			if (p.actionBasket) {
				if (p.actionBasket.actions.length < p.actionBasket.size) {
					p.actionBasket.actions = [...p.actionBasket.actions, action];
				} else {
					p.actionBasket.actions = [...tail(p.actionBasket.actions), action];
				}
			}
			return p;
		});
	}
</script>

<div class="block">
	{#each $actions as a}
		<button
			on:click={() => {
				if (a.action) {
					addAction(a);
				}
			}}>{a.name}</button
		>
	{/each}
</div>
