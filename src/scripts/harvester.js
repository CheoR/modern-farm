import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

import { addPlant } from "./field.js"

const _GETSEED = {
    Asparagus: createAsparagus(),
    Corn: createCorn(),
    Potato: createPotato(),
    Soybean: createSoybean(),
    Sunflower: createSunflower(),
    Wheat: createWheat(),
}
const _seedCount = {}
let seedsArray = []
const cornArray = []

export const harvestPlants = ( plantsArray ) => {

    plantsArray.forEach(( seed ) => {
        let count = seed.output;
        for (let i=0; i<count; i++) {
            let seedObj = _GETSEED[seed.type]

            if(Array.isArray(seedObj)) {
                cornArray.push(...seedObj)
            } else {
                seedsArray.push(seedObj)
            }
        }
    })

    // reduce the amount of corn since half of half is sold to
    // farms
    let reduceTo = cornArray.length / 4
    return seedsArray.concat(cornArray.slice(0, reduceTo))
}