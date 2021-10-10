function solve(arr){
    let biggest = Number.MIN_SAFE_INTEGER;

    const result = arr.filter((element) => {
        if(element >= biggest){
            biggest = element;
            return true;
        }

        return false;
    });

    return result;
}

console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ))