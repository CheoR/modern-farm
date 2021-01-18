export const Catalog = ( foodArray ) => {
    /*
        foodArray - harvested food array
    */
    const contentElement = document.querySelector(".container");

    let catalogHTML = "<h2>Catalog of Seeds</h2>";
    for(const item of foodArray) {
        catalogHTML += `
        <section class="plant">
            ${item.type}
        </section>
        `
    }

    contentElement.innerHTML  += catalogHTML
    //     catalogHTML += Catalog(item);
    // }

    // contentElement.innerHTML += `
    //     <section class="plant">
    //         ${catalogHTML}
    //     </section>
    // `
};

// export const Catalog = ( food ) => {
//     return `
//         <section class="plant">${food.type}</section>
//     `
// }