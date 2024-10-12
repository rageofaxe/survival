<script lang="ts">
	import StatusBar from '$lib/components/StatusBar.svelte';
	import { writable } from 'svelte/store';
</script>

<div class="container">
	<div class="flex">
		<StatusBar time={writable('')} resources={writable('')} />
	</div>
	<br />

	<div class="block">
		<div class="row">
			<button>-</button><span class="l">Sector A (0)</span><button>+</button>
		</div>
        <div class="row">
			<button>-</button><span class="l">Sector B (0)</span><button>+</button>
		</div>
        <div class="row">
			<button>-</button><span class="l">Sector C (0)</span><button>+</button>
		</div>
        <div class="row">
			<button>-</button><span class="l">Sector D (0)</span><button>+</button>
		</div>
        <div class="row">
			<button>-</button><span class="l">Sector E (0)</span><button>+</button>
		</div>
        <div class="row">
			<button>-</button><span class="l">Sector F (0)</span><button>+</button>
		</div>
        
	</div>
    <br />
    <div class="block">
		<div class="row">
			<button>-</button><span class="l">Sector A (0)</span><button>+</button>
		</div>
        <div class="row">
			<button>-</button><span class="l">Sector B (0)</span><button>+</button>
		</div>
        <div class="row">
			<button>-</button><span class="l">Sector C (0)</span><button>+</button>
		</div>
        <div class="row">
			<button>-</button><span class="l">Sector D (0)</span><button>+</button>
		</div>
        <div class="row">
			<button>-</button><span class="l">Sector E (0)</span><button>+</button>
		</div>
        <div class="row">
			<button>-</button><span class="l">Sector F (0)</span><button>+</button>
		</div>
        
	</div>
</div>

<style>
	.container {
		padding: 2rem;
	}
</style>
