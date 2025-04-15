<script lang="ts">
	import { type Readable } from 'svelte/store';

	export let areaActions: Readable<App.Area['actions']>;
	export let addAction: (action: App.Action) => void;
</script>

<div class="bordered-block">
	{#each $areaActions as a}
		<button
			on:click={() => {
				if (a.action) {
					addAction(a);
				}
			}}>{a.name}</button
		>
	{/each}
</div>
