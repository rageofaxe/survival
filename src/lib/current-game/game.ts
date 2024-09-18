import { get, writable, type Writable } from "svelte/store";

export const mission = writable<App.Mission>()
export const player = writable<App.Player>()

export const load = (p: Writable<App.Player>, m: Writable<App.Mission>) => {
    player.set(get(p))
    mission.set(get(m));
}