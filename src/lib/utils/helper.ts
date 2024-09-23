import { repeat, tail } from 'ramda';
import { derived, type Readable, type Writable } from 'svelte/store';

export const getTime = (mission: Writable<App.Mission>): Readable<string> =>
	derived(mission, (mission) => `${Math.floor(mission.time / 8)}D ${mission.time % 8}H`);

export const getResources = (mission: Writable<App.Mission>) =>
	derived(mission, (mission) =>
		Object.values(mission.resources)
			.map(
				(resource) =>
					`${resource.name}: ${
						typeof resource.volume === 'number' ? resource.volume : resource.volume.length
					}`
			)
			.join(' | ')
	);

export const getAreaDescription = (mission: Writable<App.Mission>, player: Writable<App.Player>) =>
	derived([mission, player], ([m, p]) => m.map.areas[p.position]?.description);

const CELL: App.Item = { id: -1, name: '' };

export const getItemBasket = (player: Writable<App.Player>): Readable<App.Item[]> =>
	derived(player, ({ itemBasket }) => [
		...itemBasket.items,
		...repeat(CELL, itemBasket.size).slice(itemBasket.items.length)
	]);
export const getItemsBasketName = (player: Writable<App.Player>): Readable<string> =>
	derived(player, (player) => player.itemBasket.name);
export const getActionBasket = (player: Writable<App.Player>) =>
	derived(player, (p) => p.actionBasket as App.BasketAction);

export const getAreaActions = (mission: Writable<App.Mission>, player: Writable<App.Player>) =>
	derived([mission, player], ([m, p]) => m.map.areas[p.position].actions);

export const addAction = (player: Writable<App.Player>) => (action: App.Action) => {
	player.update((p) => {
		if (p.actionBasket) {
			if (p.actionBasket.actions.length < p.actionBasket.size) {
				p.actionBasket.actions = [...p.actionBasket.actions, action];
			} else {
				p.actionBasket.actions = [...tail(p.actionBasket.actions), action];
			}
		}
		return p;
	});
};

export const removeActionByIndex = (player: Writable<App.Player>) => (index: number) => {
	player.update((p) => {
		if (p.actionBasket?.actions) {
			p.actionBasket.actions = p.actionBasket.actions.filter((_, i) => i !== index);
		}
		return p;
	});
};

export const setPlayerPosition = (
	player: Writable<App.Player>,
	position: App.Player['position']
) => {
	player.update((p) => {
		p.position = position;
		return p;
	});
};
