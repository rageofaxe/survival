import { type Writable, writable } from "svelte/store";
import { black, collect, individualHiring, white } from "./actions";

const resources = {
  "Data": { id: 1, name: "Data", volume: [] },
  "Money": { id: 2, name: "Money", volume: 3000 },
  "Headhunters": { id: 3, name: "HH", volume: 0 }
};

const description1 = `1. Collect data
2. White mail
`;

export const mission = writable<App.Mission>({
  completed: false,
  id: 0x33,
  name: "Guard.IG",
  map: {
    id: 1,
    name: "First",
    areas: [{
      id: 1,
      name: "WiFi Club",
      description: description1,
      items: [],
      links: [],
      size: 1,
      actions: [
        {
          id: 2,
          name: "White mail",
          time: 2,
          action: (player: Writable<App.Player>) => white(player),
        },
        {
          id: 3,
          name: "Black mail",
          time: 4,
          action: (player: Writable<App.Player>) => black(player),
        }
      ],
    }, {
      id: 2,
      name: "WiFi Club",
      description: description1,
      items: [],
      links: [],
      size: 1,
      actions: [
        {
          id: 4,
          name: "Hiring",
          time: 6,
          action: (player: Writable<App.Player>) => individualHiring(player),
        },
      ],
    }, {
      id: 3,
      name: "WiFi Club",
      description: description1,
      items: [],
      links: [],
      size: 1,
      actions: [
        {
          id: 1,
          name: "Collect data",
          time: 4,
          action: (player: Writable<App.Player>) => collect(player),
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
  position: 2,
  actionBasket: {
    name: "Actions",
    size: 2,
    actions: [],
  },
  name: "DataDudes",
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
  position: 1,
  actionBasket: {
    name: "Actions",
    size: 2,
    actions: [],
  },
  name: "HR",
  money: 0,
  result: 0 
});
