import { map, pipe, prop, sum } from 'ramda';
import type { Game } from './types';

// @ts-ignore
export const getPopulation = (list: Game.Settlement[]) => pipe(map(prop('population')), sum)(list);
