function solve3(obj) {
    const result = {};

    // Правим си двигателите
    function getEngine(power){
        if(power <= 90){
            return { power: 90, volume: 1800 };
        } else if(power <= 120){
            return { power: 120, volume: 2400 };
        } else {
            return { power: 200, volume: 3500 };
        }
    }

    // Правим си една променлива, в която да сложим правилния размер гуми
    const properWheelSize = obj.wheelsize % 2 == 0 ? obj.wheelsize-1 : obj.wheelsize;

    // Правим си модела
    result.model = obj.model;
    result.engine = getEngine(obj.power);
    result.carriage = {type: obj.carriage, color: obj.color};
    result.wheels = new Array(4).fill(properWheelSize, 0, 4);

    return result;

}


console.log(solve3({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
))