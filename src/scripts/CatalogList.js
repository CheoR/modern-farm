import { createPlan } from "./plan.js"
import { Catalog } from "./catalog.js"

export const CatalogList = ( foodArray ) => {
    const contentElement = document.querySelector(".container");
    // const planRows = createPlan();

    let catalogHTML = "";
    // for(const item of plant) {
    //     catalogHTML += Catalog(item);
    // }

    console.log("hobo downtown")
    console.table(foodArray);

    for (let row of foodArray) {
        for (let col of row) {
            catalogHTML += Catalog(foodArray[row][col]);
        }
    }

    contentElement.innerHTML += `
        <h2>Catalog of Seeds</h2>
        <article class="catalog">
            ${catalogHTML}
        </article>
    `
};