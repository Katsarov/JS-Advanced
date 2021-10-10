function solve(arr){
    arr = arr.sort((a,b) => {
        return a-b;
    });

    const result = [];
    const arrLength = Math.floor(arr.length/2);
    for(let i = 0; i < arrLength; i++){
        result.push(arr[i]);
        result.push(arr[arr.length - 1 - i]);
    }

    //console.log(result);
    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))

//solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])