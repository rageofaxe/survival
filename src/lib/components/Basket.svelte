<script lang="ts">
	import { type Readable } from "svelte/store";

    export let itemBasket:Readable<App.Item[]>;
    export let itemsBasketName: Readable<string>;
</script>

<div class="block">
    <span class="l">{$itemsBasketName}</span>
    <div class="row-1">
        {#each $itemBasket as cell}
            <div class="cell">
                <span>{cell.name}</span>
            </div>    
        {/each}
    </div>
</div>