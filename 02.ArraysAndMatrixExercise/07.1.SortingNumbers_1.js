function solve(arr){
    arr = arr.sort((a,b) => {
        return a-b;
    });

    const result = [];

    while(arr.length != 0){
        result.push(arr.shift(), arr.pop());
    }

    //console.log(result);
    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))

//solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])