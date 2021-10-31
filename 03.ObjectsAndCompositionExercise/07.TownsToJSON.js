function solve7(arr){
    //Правим си един празен масив
    const result = [];

    // Сплитваме първият елемент(ред) по "|"
    const splitted = arr[0].split("|");

    // Парсваме резултата и го запазваме в 3 променливи
    const town = splitted[1].trim();
    const latitude = splitted[2].trim();
    const longitude = splitted[3].trim();


    for(let i = 1; i < arr.length; i++){
        const obj = {};
        const splittedEntry = arr[i].split('|');
        obj[town] = splittedEntry[1].trim();
        // Тук първо тримваме, парсваме го към число, след това го фиксваме до 2 символа след запетаята и накрая отново го парсваме към число
        obj[latitude] = Number(Number(splittedEntry[2].trim()).toFixed(2));
        obj[longitude] = Number(Number(splittedEntry[3].trim()).toFixed(2));
        result.push(obj);
    }
    
    //return JSON.stringify(result);
    console.log(JSON.stringify(result));
    //console.log(JSON.stringify(result,null, 2));
}

solve7(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)