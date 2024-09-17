import { probability, random, shuffle } from "$lib/utils"
import { get } from "svelte/store"
import { mission, player } from "./store"
import type { Data } from "./types"
import { init } from "ramda"

const WHITE_MAIL_DISTRIBUTION = 2
const WHITE_MAIL_PROBABILITY = 20
const BLACK_MAIL_DISTRIBUTION = 40
const HIRING_PROBABILITY = 10
const BLACK_MAIL_COST = 250

export function collect() {
    let newData: Data[] = [...Array(random(10, 100))].map((x, i) => i).map((x) => ({
        isWM: probability(WHITE_MAIL_DISTRIBUTION),
        isBM: probability(BLACK_MAIL_DISTRIBUTION),
        wm: false,
        bm: false,

        infoForBM: null
    }))

    mission.update(state => {
        state.resources["Data"].volume = [...state.resources["Data"].volume as Data[], ...newData]
        return state
    })
}

export function white() {
    let money = get(mission).resources["Money"].volume as number
    let data = get(mission).resources["Data"].volume as Data[]
    let volume = data.map((user) => {
        if (probability(WHITE_MAIL_PROBABILITY) && user.isWM && !user.wm) {
            user.wm = true
            money += [5, 10, 20, 30][random(0, 3)]
        }
        return user
    })

    mission.update(state => ({
        ...state,
        resources: {
            ...state.resources,
            "Data": { ...state.resources["Data"], volume },
            "Money": { ...state.resources["Money"], volume: money },
        }
    }))
}

export function black() {
    let headhunters = get(player).itemBasket.items
    let hhSize = headhunters.length
    let money = get(mission).resources["Money"].volume as number
    let volume = get(mission).resources["Data"].volume as Data[]

    if (hhSize) {
        volume.filter(user => !user.bm).slice(0, hhSize).forEach(user => {
            console.log(">>>", user)
            user.bm = true
            money -= BLACK_MAIL_COST
            if (probability(10)) {
                player.update(p => ({
                    ...p,
                    itemBasket: {
                        ...p.itemBasket,
                        items: init(headhunters)
                    }
                }))
            }
            if (user.isBM) {
                money += 1000
            }
            return user
        })
        mission.update(state => ({
            ...state,
            resources: {
                ...state.resources,
                "Data": {
                    ...state.resources["Data"],
                    volume
                },
                "Money": { ...state.resources["Money"], volume: money },
            }
        }))

    }
}

export function hiring() {
    if (probability(HIRING_PROBABILITY)) {
        player.update(p => ({
            ...p,
            itemBasket: {
                ...p.itemBasket,
                items: p.itemBasket.items.length < p.itemBasket.size ? [...p.itemBasket.items, {name: shuffle(["!", "@", "#", "$", "%"])[0]}] : p.itemBasket.items
            }
        }))
    }
}