export const Catalog = ( foodArray ) => {
    /*
        foodArray - harvested food array
    */
    const contentElement = document.querySelector(".container");

    let catalogHTML = "";
    for(const item of foodArray) {
        catalogHTML += `
        <section class="plant">
            ${item.type}
        </section>
        `
    }

    contentElement.innerHTML  += catalogHTML

};
