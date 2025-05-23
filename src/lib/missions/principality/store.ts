import { writable } from 'svelte/store';
import type { Game } from './types';

const resources: { [k in string]: App.Resource } = {
	population: { id: 1, name: 'Population', volume: 3500 },
	gold: { id: 2, name: 'Gold', volume: 13000 }
};

export const settlements: Game.Settlement[] = [
	{
		population: 1352,
		name: 'Castle 1',
		type: 'Castle',
		position: [3, 3]
	},
	{
		population: 251,
		name: 'Village',
		type: 'Village',
		position: [4, 5]
	},
	{
		population: 153,
		name: 'Vilaribo',
		type: 'Village',
		position: [1, 1]
	},
	{
		population: 342,
		name: 'Krasnaje',
		type: 'Village',
		position: [5, 1]
	}
];

export const mission = writable<App.Mission>({
	id: 1,
	map: {
		id: 1,
		areas: [
			{
				id: 1,
				actions: [],
				description: 'Your Kingdom',
				items: [],
				links: [],
				name: 'Kingdom',
				size: 0
			}
		],
		name: ''
	},
	name: '',
	needs: [],
	resources,
	time: 1
});

export const player = writable<Game.Player>({
	itemBasket: {
		id: 1,
		kind: 'items',
		name: 'Headhunters',
		size: 6,
		items: []
	},
	money: 100,
	name: 'Knight',
	position: 0,
	settlements
});
