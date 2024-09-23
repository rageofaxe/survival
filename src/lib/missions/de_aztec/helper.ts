import { derived, type Readable, type Writable } from "svelte/store";

export const getTime = (mission: Writable<App.Mission>): Readable<string> => derived(mission, (mission) => `${Math.floor(mission.time / 60)}M ${mission.time % 60}S`);