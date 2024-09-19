<script lang="ts">
	import type { Readable } from 'svelte/store';

	let shown = true;

	export let areaDescription: Readable<string>;
</script>

<div class="block">
	{#if shown}
		<span class="">
			<pre>{$areaDescription}</pre>
		</span>
	{/if}
	<button on:click={() => (shown = !shown)}>{shown ? 'Got it' : 'Show description'}</button>
</div>
