<script lang="ts">
	import { goto } from '$app/navigation';
	import { load } from '$lib/current-game/game';
	import * as guard from '$lib/missions/guard/store';
	import * as guard2 from '$lib/missions/guard2/store';
	import * as easyWalk from '$lib/missions/easy-walk/store';

	function selectGuard() {
		const { player, mission } = guard;
		load(player, mission);
		goto('/game/guard');
	}

	function selectGuard2() {
		const { player1, mission } = guard2;
		load(player1, mission);
		goto('/game/guard2');
	}

	function selectEasyWalk() {
		const { player, mission } = easyWalk;
		load(player, mission);
		goto('/game/01-easy-walk');
	}
</script>

<div class="container">
	<button on:click={selectGuard}>Guard</button>
	<button on:click={selectGuard2}>Guard2</button>
	<button on:click={selectEasyWalk}>Easy walk</button>
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
		gap: 1rem;
	}
</style>
