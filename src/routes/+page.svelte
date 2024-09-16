<script>
	import ActionBar from '$lib/components/ActionBar.svelte';
import Basket from '$lib/components/Basket.svelte';
import Description from '$lib/components/Description.svelte';
import Map from '$lib/components/Map.svelte';
import StatusBar from '$lib/components/StatusBar.svelte';
</script>

<div class="flex">
	<StatusBar />
	<div class="row">
		<Map />
		<Description />
	</div>
	<div class="row">
		<Basket />
		<ActionBar />
	</div>
</div>
