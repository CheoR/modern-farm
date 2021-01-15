console.log("Welcome to the main module")

import { createPlan } from "./plan.js"

const yearlyPlan = createPlan();

console.log("Modern Farm Management")
console.table(yearlyPlan);

import { createCorn } from "./seeds/createCorn.js"
console.log("Test Your Logics")
let corn = createCorn();
console.log("\n");
console.log(corn);
console.log("\n");
import  { createPotato } from "./seeds/createPotato.js"

let potato = createPotato()

console.log(potato)


