function solve(arr, num){

    for(let i = 0; i < num; i++){
        const number = arr.pop();
        arr.unshift(number);
    }

    console.log(arr.join(' '));
}

solve(['1', 
'2', 
'3', 
'4'], 
2
)
