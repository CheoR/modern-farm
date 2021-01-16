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

export const plantSeeds = ( plansArray ) => {
    /*
        plansArray: 2D array
    */
    let seed = null;
    for(let row=0; row < plansArray.length; row++) {
        for(let col=0; col < plansArray[row].length; col++) {
            seed = _GETSEED[plansArray[row][col]]
            addPlant(seed);
        }
    }
    seed = null;
};