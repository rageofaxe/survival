<script lang="ts">
	import { goto } from '$app/navigation';
	import { load } from '$lib/current-game/game';
	import * as guard from '$lib/missions/guard/store';
	import * as guard2 from '$lib/missions/guard2/store';
	import { tick } from 'svelte';

	async function selectGuard() {
		const {player, mission} = guard
		load(player, mission)
		tick()
		await goto('/game/guard');
	}

	async function selectGuard2() {
		const {player, mission} = guard2
		load(player, mission)
		tick()
		await goto('/game/guard2');
	}
</script>

<div class="container">
	<button on:click={selectGuard}>Guard</button>
	<button on:click={selectGuard2}>Guard2</button>
</div>

<style>
	.container {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: content-box;
		flex-direction: column;
		gap: 1rem
	}
</style>
