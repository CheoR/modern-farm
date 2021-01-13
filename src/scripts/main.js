import { createPlan } from "./plan.js";

const yearlyPlan = createPlan()

console.log("Welcome to the main module")
console.log(`Yearly plan: \n${yearlyPlan}`);


/* tempoary test code */
import { createAsparagus } from "./seeds/asparagus.js";

const asparagusSeed = createAsparagus();

console.log(asparagusSeed);