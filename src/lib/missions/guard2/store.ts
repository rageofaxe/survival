import { writable } from "svelte/store";
import { black, collect, hiring, white } from "./actions";

const resources = {
  "Data": { id: 1, name: "Data", volume: [] },
  "Money": { id: 2, name: "Money", volume: 0 },
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
          id: 1,
          name: "Collect data",
          action: () => collect(4),
        },
        {
          id: 2,
          name: "White mail",
          action: () => white(2),
        },
        {
          id: 3,
          name: "Black mail",
          action: () => black(4),
        },
        {
          id: 4,
          name: "Hiring",
          action: () => hiring(6),
        },
      ],
    }],
  },
  needs: [],
  resources,
  isMap: false,
  time: 0,
});

export const player = writable<App.Player>({
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
});
