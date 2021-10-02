function solve(numbers){
    const myArr = [];
    for(let num of numbers){
        if(num >= 0){
            myArr.push(num);
        } else{
            myArr.unshift(num);
        }
    }

    for(let num of myArr){
        console.log(num);
    }
}

solve([7, -2, 8, 9]);
console.log('- - - - - - - -')
solve([3, -2, 0, 1]);