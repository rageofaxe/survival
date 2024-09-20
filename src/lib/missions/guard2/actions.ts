import { probability, random, shuffle } from "$lib/utils";
import { get, type Writable } from "svelte/store";
import { mission, player } from "$lib/current-game/game";
import type { Data } from "./types";
import { init } from "ramda";

const WHITE_MAIL_DISTRIBUTION = 2;
const WHITE_MAIL_PROBABILITY = 20;
const BLACK_MAIL_DISTRIBUTION = 40;
const HIRING_PROBABILITY = 10;
const BLACK_MAIL_COST = 250;
const SALARY = 750;

export function collect(player: Writable<App.Player>) {
  let newData: Data[] = [...Array(random(10, 100))].map((x, i) => i).map((
    x,
  ) => ({
    isWM: probability(WHITE_MAIL_DISTRIBUTION),
    isBM: probability(BLACK_MAIL_DISTRIBUTION),
    wm: false,
    bm: false,

    infoForBM: null,
  }));

  mission.update((state) => {
    state.resources["Data"].volume = [
      ...state.resources["Data"].volume as Data[],
      ...newData,
    ];
    if (state.resources["Data"].volume.length > 500) {
      (state.resources["Money"].volume as number) -= 15;
      player.update((p) => {
        p.money += 15;
        return p;
      });
    }
    return state;
  });
}

export function white(player: Writable<App.Player>) {
  let money = get(mission).resources["Money"].volume as number;
  let data = get(mission).resources["Data"].volume as Data[];
  let volume = data.map((user) => {
    if (probability(WHITE_MAIL_PROBABILITY) && user.isWM && !user.wm) {
      user.wm = true;
      let salary = [5, 10, 20, 30][random(0, 3)]
      money += salary;
      player.update((p) => {
        p.money += salary;
        return p;
      });
    }
    return user;
  });

  mission.update((state) => ({
    ...state,
    resources: {
      ...state.resources,
      "Data": { ...state.resources["Data"], volume },
      "Money": { ...state.resources["Money"], volume: money },
    },
  }));
}

export function black(player: Writable<App.Player>) {
  let money = get(mission).resources["Money"].volume as number;
  let volume = get(mission).resources["Data"].volume as Data[];
  let headhunters = get(mission).resources["Headhunters"].volume as number;
  let hhSize = headhunters;

  if (hhSize) {
    volume.filter((user) => !user.bm).slice(0, hhSize).forEach((user) => {
      console.log(">>>", user);
      user.bm = true;
      money -= BLACK_MAIL_COST;
      if (probability(10)) {
        mission.update((m) => {
          (m.resources["Headhunters"].volume as number) -= 1;
          return m;
        });
      }
      if (user.isBM) {
        money += SALARY;
        player.update((p) => {
          (p.result as number) += 1;
          return p;
        });
      }
      return user;
    });
    mission.update((state) => ({
      ...state,
      resources: {
        ...state.resources,
        "Data": {
          ...state.resources["Data"],
          volume,
        },
        "Money": { ...state.resources["Money"], volume: money },
      },
    }));
  }
}

export function hiring() {
  if (probability(HIRING_PROBABILITY)) {
    player.update((p) => ({
      ...p,
      itemBasket: {
        ...p.itemBasket,
        items: p.itemBasket.items.length < p.itemBasket.size
          ? [...p.itemBasket.items, {
            name: shuffle(["!", "@", "#", "$", "%"])[0],
          }]
          : p.itemBasket.items,
      },
    }));
  }
}

export function individualHiring(player: Writable<App.Player>) {
  const salary = 150;
  if (probability(HIRING_PROBABILITY)) {
    mission.update((state) => {
      (state.resources["Headhunters"].volume as number) += 1;
      return state;
    });
    mission.update((m) => {
      (m.resources["Money"].volume as number) -= salary;
      return m;
    });
    player.update((p) => {
      p.money += salary;
      (p.result as number) += 1;
      return p;
    });
  }
}
