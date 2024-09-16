// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		export type Area = {
			id: number;
			name: string;
			links: Area["id"][] | "END";
			actions: Action[];
			items: Item[];
			size: number;
		}
	
		export type Map = {
			id: number;
			name: string;
			areas: Area[]
		}
	
		export type Resource = {
			id: number;
			name: string;
			volume: number;
		}
	
		export type Needs = {
			id: number;
			name: string;
		}
	
		export type Mission = {
			id: number;
			name: string;
			map: Map;
			completed: boolean;
			resources: Resource[];
			needs: Needs[]
		}
	
		export type Basket<Kind extends "items" | "actions"> = {
			id: number;
			name: string;
			kind: Kind;
			size: number;
		}
	
		export type Action = {
			id: number;
			name: string;
			f?: Function;
			items?: Item[]
		}
	
		export type Item = {
			id: number;
			name: string;
		}
	
		export type Player = {
			itemBasket: Basket<"items">;
			actionBasket: Basket<"actions">;
			position: Area["id"];
		}
	
		export type Game = {
			mission: Mission;
			time: [number, number]
			players: Player[]
		}
	}
}

export {};
