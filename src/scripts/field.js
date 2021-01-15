const _plantArray = [];

const addPlant = ( seed ) => {
    /*
        seed : object or array that contains 2 objects
    */
    // extract corn objs
    console.log("Seed is ");
    console.log(Object.keys(seed));
    if (Array.isArray(seed)) {
        console.log("this is an array");
        _plantArray.push(...seed)
    }
    _plantArray.push(seed);

    console.log(`${seed} added to plantArray`)
}

const usePlants = () => {
    return _plantArray.map((seed) => {
        return seed.type;
    });
}

export { addPlant, usePlants };