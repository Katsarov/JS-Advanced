function population(townsAsStrings){
    // iterate over input
    // parse entries
    //store data
    //print printResult

    const towns = {};

    for(let data of townsAsStrings){
        const tokens = data.split(' <-> ');
        const name = tokens[0];
        const population = Number(tokens[1]);

        // Ако не открием името на града, го добашяме заедно с населението, в противен случай добавяме само населението към съществуващия град и население
        if(towns[name] == undefined){
            towns[name] = population;
        } else {
            towns[name] += population;
        }
    }

    // За да отпечатаме резултата ш искания формат, трябва да обходим елементите на масива.
    for(const name in towns){
        console.log(`${name} : ${towns[name]}`)
    }

}

population(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);

population(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);