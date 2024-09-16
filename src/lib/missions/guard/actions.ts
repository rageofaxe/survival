import { probability, random } from "$lib/utils"
import { get } from "svelte/store"
import { mission } from "./store"
import type { Data } from "./types"

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

    mission.update(state => ({
        ...state,
        resources: {
            ...state.resources,
            "Data": {
                ...state.resources["Data"],
                volume: [...state.resources["Data"].volume as Data[], ...newData]
            } as App.Resource<Data[]>
        }
    }))
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
    let headhunters = 1
    let money = get(mission).resources["Money"].volume as number
    let volume = get(mission).resources["Data"].volume as Data[]

    if (headhunters) {
        console.log("HH")
        volume.filter(user => !user.bm).slice(0, headhunters).forEach(user => {
            console.log(">>>", user)
            user.bm = true
            money -= 250
            if (probability(10)) {
                headhunters -= 1
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