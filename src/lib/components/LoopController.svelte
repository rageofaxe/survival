<script lang="ts">
	import { player } from '$lib/current-game/game';

	const SLOW = 1000;
	const FAST = 250;

	let interval: number;
	let delay = SLOW;

	function pause() {
		clearInterval(interval);
        interval = 0
        console.log(interval)
	}

	function play() {
		if (!interval) {
			interval = setInterval(() => {
				console.log('>>>');
				$player.actionBasket?.actions.forEach((a) => {
					if (a.action) {
						a.action();
					}
				});
			}, delay);
		}
	}

	function speed() {
        pause()
		delay = delay === SLOW ? FAST : SLOW;
        play()
	}
</script>

<div class="row">
	<button on:click={() => (interval ? pause() : play())}>{interval ? 'Pause' : 'Play'}</button> <button on:click={speed}>{delay === SLOW ? "Make fast" : "Make slow"}</button>
</div>
