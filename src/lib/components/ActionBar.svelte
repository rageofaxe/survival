<script lang="ts">
	export let mission: App.Mission;

	let actions = mission.map.areas[0].actions;
</script>

<div class="block">
	{#each actions as {name, action}}
		<button
			on:click={() => {
				if (action) {
					action();
				}
			}}>{name}</button
		>
	{/each}
</div>
