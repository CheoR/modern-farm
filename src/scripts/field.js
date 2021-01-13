const _plantArray = [];

const addPlant = ( seed ) => {

    // extract corn objs
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