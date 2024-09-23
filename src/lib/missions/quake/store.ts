import { type Writable, writable } from "svelte/store";
import { black, collect, individualHiring, white } from "../guard2/actions";
import { setPlayerPosition } from "$lib/utils/helper";

const resources = {
  "Health": { id: 3, name: "Health", volume: 100 },
  "Armor": { id: 2, name: "Armor", volume: 0 },
  "Rockets": { id: 1, name: "Rockets", volume: 0 },
};

const description1 = `1. Collect data
2. White mail
`;

export const mission = writable<App.Mission>({
  completed: false,
  id: 0x33,
  name: "Quake",
  map: {
    id: 1,
    name: "DM6",
    areas: [{
      id: 0,
      name: "Megahealth",
      description: description1,
      items: [],
      links: [],
      size: 1,
      actions: [
        {
          id: 1,
          name: "Go to RG",
          action: (player: Writable<App.Player>) => setPlayerPosition(player, 1),
        },
        {
          id: 3,
          name: "Go to LG",
          action: (player: Writable<App.Player>) => setPlayerPosition(player, 2),
        }
      ],
    }, {
        id: 1,
        name: "RL Area",
        description: description1,
        items: [],
        links: [],
        size: 1,
        actions: [
          {
            id: 1,
            name: "Go to MH",
            action: (player: Writable<App.Player>) => setPlayerPosition(player, 0),
          },
        ],
      }, {
        id: 2,
        name: "LG Area",
        description: description1,
        items: [],
        links: [],
        size: 1,
        actions: [
          {
            id: 1,
            name: "Go to MH",
            action: (player: Writable<App.Player>) => setPlayerPosition(player, 0),
          },
        ],
      }],
  },
  needs: [],
  resources,
  isMap: false,
  time: 0,
});

export const player1 = writable<App.Player>({
  itemBasket: {
    id: 1,
    kind: "items",
    name: "Headhunters",
    size: 6,
    items: [],
  },
  position: 0,
  actionBasket: {
    name: "Actions",
    size: 2,
    actions: [],
  },
  name: "Fatal1ty",
  money: 0
});

export const player2 = writable<App.Player>({
  itemBasket: {
    id: 1,
    kind: "items",
    name: "Headhunters",
    size: 6,
    items: [],
  },
  position: 0,
  actionBasket: {
    name: "Actions",
    size: 2,
    actions: [],
  },
  name: "Head",
  money: 0,
  result: 0
});

export const player3 = writable<App.Player>({
  itemBasket: {
    id: 1,
    kind: "items",
    name: "Headhunters",
    size: 6,
    items: [],
  },
  position: 0,
  actionBasket: {
    name: "Actions",
    size: 2,
    actions: [],
  },
  name: "HR",
  money: 0,
  result: 0 
});
