<script lang="ts">
	import { derived, type Writable } from "svelte/store";

	export let player: Writable<App.Player>;
	export let mission: Writable<App.Mission>;
	
	let actions = derived([mission, player], ([m, p]) => m.map.areas[p.position].actions)
</script>

<div class="bordered-block">
	{#each $actions as a}
		<button
			on:click={() => {
				if (a.action) {
					console.log("action", a)
					a.action(player);
				}
			}}>{a.name}</button
		>
	{/each}
</div>
