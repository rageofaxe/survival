import { mission } from '$lib/current-game/game.js';
import { redirect } from '@sveltejs/kit';
import { get } from 'svelte/store';

export function load() {
    if (!get(mission)) {
        throw redirect(302, '/');
    }
}