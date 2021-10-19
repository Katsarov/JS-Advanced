function population(townsAsStrings){
    // iterate over input
    // parse entries
    //store data
    //print printResult

    const towns = {};

    for(let data of townsAsStrings){
        const tokens = data.split(' <-> ');
        const name = tokens[0];
        let pop = Number(tokens[1]);

        // 
        if(towns[name]){
            pop += towns[name];
        } 
        towns[name] = pop;

    }

    // За да отпечатаме резултата в искания формат, трябва да обходим елементите на обекта. Правим си го на масив и го обхождаме.
    for(const [townName, potownPop] of Object.entries(towns)){
        console.log(`${townName} : ${potownPop}`)
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