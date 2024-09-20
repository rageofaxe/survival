<script lang="ts">
	import { derived, type Writable } from "svelte/store";

    export let player: Writable<App.Player>
    let money = derived(player, p => p.money)
    let result = derived(player, p => p.result)
</script>
<div class="block">
    <span class="m">{$player.name}</span>
    <span class="">Money: {$money}</span>
    {#if $result}
        <span class="">Result: {$result}</span>
    {/if}
</div>

<style>
    div {
        max-width: 180px
    }
    </style>
