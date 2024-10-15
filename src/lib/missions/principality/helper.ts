import { map, pipe, prop, sum } from 'ramda';
import type { Game } from './types';

// @ts-ignore
export const getPopulation = (list: Game.Settlement[]) => pipe(map(prop('population')), sum)(list);

export function getSettlementByPosition(
	list: Game.Settlement[],
	position: Game.Settlement['position']
) {
	return list.find((s) => s.position[0] === position[0] && s.position[1] === position[1]);
}
