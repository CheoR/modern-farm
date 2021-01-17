import { createPlan } from "./plan.js";
import { CatalogList } from "./CatalogList.js"

const yearlyPlan = createPlan()

console.log("Welcome to the main module")
console.log(`Yearly plan: \n${yearlyPlan}`);


/* tempoary test code */
// import { createAsparagus } from "./seeds/asparagus.js";

// const asparagusSeed = createAsparagus();

// console.log(asparagusSeed);

/* tempoary test code */
import { addPlant, usePlants } from "./field.js";
import { createCorn } from "./seeds/corn.js"
import { createAsparagus } from "./seeds/asparagus.js";

const cornSeeds = createCorn();
const asparagusSeed = createAsparagus();

let plants = undefined;

addPlant(cornSeeds);
addPlant(asparagusSeed);

plants = usePlants()
console.log(`Plant list: ${plants}`)

// import { createPlan } from "./plan.js"

// const yearlyPlan = createPlan();

// console.log("Modern Farm Management")
// console.table(yearlyPlan);

// import { createCorn } from "./seeds/createCorn.js"
// console.log("Test Your Logics")
// let corn = createCorn();
// console.log("\n");
// console.log(corn);
// console.log("\n");
// import  { createPotato } from "./seeds/createPotato.js"

// let potato = createPotato()

// console.log(potato)

// console.log("Tilling the Field Test")
// import { addPlant, usePlants } from "./field.js"
// import { createCorn } from "./seeds/createCorn.js"
// import  { createPotato } from "./seeds/createPotato.js"
// import { createSoybean } from "./seeds/createSoybean.js"

// const corn = createCorn()
// const potato = createPotato()
// const soybean = createSoybean()

// addPlant(soybean)
// addPlant(potato)
// addPlant(corn)
// addPlant(soybean)
// const plants = usePlants()
// console.log(plants)
// console.table(plants)


// import { createPlan } from "./plan.js"
// import { plantSeeds } from "./tractor.js"
// import { usePlants } from "./field.js"

// const yearlyPlan = createPlan();
// plantSeeds(yearlyPlan)
// const plants = usePlants();
// console.log("DID THEY PLANT?")
// console.table(plants)

// import { createPlan } from "./plan.js"
// import { plantSeeds } from "./tractor.js"
// import { usePlants } from "./field.js"
// import { harvestPlants } from "./harvester.js"


// console.log("====== TESTING TRACTOR ========")

// const plan = [
//     ["Corn", "Potato"],
//     ["Asparagus", "Soybean"],
//     ["Sunflower", "Wheat"],
// ]

// let plantedSeeds
// let harvestedPlants

// console.log("plan")
// console.table(plan)
// console.log("plan")

// plantSeeds(plan)
// plantedSeeds = usePlants()
// console.log("planted seeds")
// console.table(plantedSeeds)
// console.log("planted seeds")

// harvestedPlants = harvestPlants(plantedSeeds)
// console.log("harvested Plants")
// console.table(harvestedPlants)
// console.log("harvested Plants")

// const yearlyPlan = createPlan();
// plantSeeds(yearlyPlan)

// const plants = usePlants()

// console.table(plants)
// harvestPlants(plants)
// console.log("====== TESTING TRACTOR ========")
