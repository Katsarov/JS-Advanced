function solve(arr){
    const result = [];
    let biggest = Number.MIN_SAFE_INTEGER;

    for(let el of arr){
        if(el >= biggest){
            result.push(el);
            biggest = el;
        }
    }

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