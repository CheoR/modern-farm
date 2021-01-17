const _plantArray = [];

const addPlant = ( seed ) => {
    /*
        seed : object or array that contains 2 objects
    */
    // extract corn objs
    console.log("Seed is ");
    console.log(Object.keys(seed));
    if (Array.isArray(seed)) {
        _plantArray.push(...seed)
    } else {
        _plantArray.push(seed);
    }
}

const usePlants = () => {
    // return _plantArray.map((seed) => {
    //     return seed.type;
    // });
    return _plantArray.slice()
}

export { addPlant, usePlants };