<script lang="ts">
	import { player } from "$lib/missions/guard/store";
	import { derived } from "svelte/store";

    const CELL: App.Item = {id: -1, name: ""}

    let items = derived(player, (player) => player.itemBasket.items)
    let basketSize = $player.itemBasket.size
    $: basket = [...$items, ...[...Array(basketSize)].map(_ => CELL).slice($items.length)]
</script>

<div class="block">
    <span class="l">{$player.itemBasket.name}</span>
    <div class="row-1">
        {#each basket as cell}
            <div class="cell">
                <span>{cell.name}</span>
            </div>    
        {/each}
    </div>
</div>