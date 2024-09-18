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
			description: string;
			ascii?: string;
		}

		export type Map = {
			id: number;
			name: string;
			areas: Area[]
		}

		export type Resource<T = any[] | number> = {
			id: number;
			name: string;
			volume: T;
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
			resources: { [k: Resource["name"]]: Resource }
			needs: Needs[];
			isMap: boolean;
			time: number;
		}

		export type Basket<Kind extends "items" | "actions"> = {
			id: number;
			name: string;
			kind: Kind;
			size: number;
			items: Item[]
		}

		export type BasketAction = {
			id?: number;
			name: string;
			size: number;
			actions: Action[]
		}

		export type Action = {
			id: number;
			name: string;
			action?: Function;
		}

		export type Item = {
			id?: number;
			name: string;
		}

		export type Player = {
			itemBasket: Basket<"items">;
			actionBasket?: BasketAction;
			position: Area["id"];
		}
	}
}

export { };
