<script lang="ts">
	import rough from 'roughjs/bin/rough';
	import castle from '$lib/assets/pr/castle.svg';
	// npm i roughjs@4.0.4
	// https://roughjs.com/

	const CELL = 32;

	let roughSvg;

	function action(node: any) {
		roughSvg = rough.svg(node);

		const sprite = roughSvg.circle(CELL / 2, CELL / 2, CELL - 4, {
			// x, y, width, height
			fill: 'blue'
		});
		node.style.width = CELL - 2;
		node.style.height = CELL - 2;
		node.style.position = 'absolute';
		node.style.top = 0;
		node.style.left = 0;

		node.appendChild(castle);
	}
</script>

<!-- <svg use:action /> -->

<img src={castle} width={CELL} height={CELL} alt="v" />

<style>
	svg {
		background-color: white;
	}

	img {
		position: absolute;
	}
</style>
