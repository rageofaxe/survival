export namespace Game {
	export type Settlement = {
		name: string;
		population: number;
		type: 'Castle' | 'Village';
		position: [number, number];
	};

	export type Player = App.Player & {
		settlements: Settlement[];
	};
}

export type Camp = {};
