function evenPos(strings){
    let result = [];

    for(let i = 0; i < strings.length; i+=2){
            result[result.length] = strings[i];
    }

    console.log(result.join(' '));
}

evenPos(['20', '30', '40', '50', '60']);
evenPos(['5', '10']);