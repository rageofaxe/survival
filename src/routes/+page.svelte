<script lang="ts">
	import { goto } from '$app/navigation';

	function select() {
		goto('/game/guard');
	}
</script>

<div class="container">
	<button on:click={select}>Guard</button>
</div>

<style>
	.container {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: content-box;
	}
</style>
