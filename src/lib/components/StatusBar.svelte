<script lang="ts">
	import { goto } from '$app/navigation';
	import { type Readable } from 'svelte/store';

	export let time: Readable<string>;
	export let resources: Readable<string>;

	function quit() {
		goto('/');
	}
</script>

<div class="row">
	<div class="bordered-block">
		<div class="justify-between">
			<span class="">{$resources}</span>
			<span class="">{$time}</span>
			<button on:click={quit}>Quit</button>
		</div>
	</div>
</div>

<style>
	.justify-between {
		justify-content: space-between;
		align-items: center;
		display: flex;
	}
</style>
