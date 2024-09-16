<script lang="ts">
	import { goto } from '$app/navigation';

	function select() {
		goto('/game');
	}
</script>

<button on:click={select}>Hi</button>
