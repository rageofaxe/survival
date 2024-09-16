import { probability, random } from "$lib/utils";
import { writable } from "svelte/store";
import { black, collect, white } from "./actions";

const DATA: App.Resource = { id: 1, name: "Data", volume: [] }

const resources = {
    "Data": DATA,
    "Money": { id: 2, name: "Money", volume: 550 },
}

const description1 = `1. Collect data
2. White mail
3. Black mail 
    1. Send initial letter (first 10 users)
    2. Call HH or take money (100% / 0%)
    3. Send second letter
    4. Call HH or take money (60% / 40%)
`

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
                    action: collect
                },
                {
                    id: 2,
                    name: "White mail",
                    action: white
                },
                {
                    id: 3,
                    name: "Black mail",
                    action: black
                },
                {
                    id: 4,
                    name: "Hiring",
                },
            ]
        }]
    },
    needs: [],
    resources,
    isMap: false
})