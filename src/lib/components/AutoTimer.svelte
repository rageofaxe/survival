<script lang="ts">
	import { onMount } from 'svelte';
	import { type Writable, get } from 'svelte/store';

	const FAST = 250;
	const SLOW = 500;

	export let mission: Writable<App.Mission>;
	export let players: Writable<App.Player>[];

	let interval: number = 0;
	let delay = SLOW;

	function play() {
		interval = setInterval(() => {
			let time: number;
			mission.update((m) => {
				m.time += 1;
				time = m.time;
				return m;
			});

			players.forEach((p) => {
				let player = get(p);
				if (player.actionBasket) {
					player.actionBasket.actions.forEach((a) => {
						if (a.action && a.time) {
							if (time % a.time === 0) {
								console.log('CALL', a.name);
								a.action(p);
							}
						}
					});
				}
			});
		}, delay);
	}

	function pause() {
		clearInterval(interval);
		interval = 0;
	}

	onMount(() => {
		play()
	})
</script>

