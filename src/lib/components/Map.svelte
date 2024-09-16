<script lang="ts">
	export let mission: App.Mission;
</script>

{#if mission.isMap}
	<div class="block map">
		<span class="l">MAP</span>
	</div>
{/if}

<style>
	.map {
		width: 66vw;
		height: 60vh;
		flex: 2;
	}
</style>
