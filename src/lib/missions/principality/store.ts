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
		type: 'Castle'
	},
	{
		population: 251,
		name: 'Village',
		type: 'Village'
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
