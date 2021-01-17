import { createPlan } from "./plan.js"

export const CatalogList = ( foodArray ) => {
    const contentElement = document.querySelector("container");
    const catalog = createPlan();

    let catalogHTML = "";
    for(const item of foodArray) {
        catalogHTML += Catalog(item);
    }

    contentElement.innerHTML += `
        <h2>Catalog of Seeds</h2>
        <article class="catalog">
            ${catalogHTML}
        </article>
    `
};