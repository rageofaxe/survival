<script lang="ts">
	import StatusBar from '$lib/components/StatusBar.svelte';
	import { writable } from 'svelte/store';
	import dust2 from '$lib/assets/pr/dust2.png';

	let players = [
		{ title: 'alpha', health: 100, armor: 50, weapon: 'AK-74', frags: 3, death: 1 },
		{ title: 'bravo' },
		{ title: 'charlie' },
		{ title: 'delta' },
		{ title: 'echo' }
	];
</script>

<div class="container">
	<div class="column">
		<StatusBar time={writable('')} resources={writable('')} />
	</div>
	<br />

	<div class="bordered-block">
		<div class="row">
			
				<img alt="" src={dust2} height="400" width="400" />
			
			<div class="column">
				<span>Alpha drop the bomb</span>
				<span>Charlie kill th3p1mp</span>
			</div>
		</div>
	</div>

	<br />

	<div class="bordered-block">
		<div class="row">
			{#each players as player}
				<div class="column">
					<h3>{player.title}</h3>
					<span>Weapon: {player.weapon}</span>
					<span>Money: 500$</span>
					<span>Health and Armor: {player.health} / {player.armor}</span>
					<span>Frags and death: {player.frags} / {player.death}</span>
					<select>
						<option>Stay here</option>
						<option>Go to #Box1</option>
						<option>Go to #Box2</option>
						<option>Go to #Hole1</option>
						<option>Go to #Hole5</option>
						
					</select>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.container {
		padding: 2rem;
	}
</style>
