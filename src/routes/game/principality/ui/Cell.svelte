<script lang="ts">
	import rough from 'roughjs/bin/rough';
	// npm i roughjs@4.0.4
	// https://roughjs.com/

	const CELL = 32;

	let roughSvg;

	function action(node: any) {
		roughSvg = rough.svg(node);
		const rect = roughSvg.rectangle(0, 0, CELL, CELL, {
			// x, y, width, height
		});
		node.style.width = CELL;
		node.style.height = CELL;

		node.appendChild(rect);
	}
</script>

<svg use:action />

<style>
	svg {
		background-color: white;
	}
</style>
