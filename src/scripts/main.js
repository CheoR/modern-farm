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

console.log("AS TABLE");
console.table(yearlyPlan);

CatalogList(yearlyPlan);