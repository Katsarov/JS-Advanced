function myArr(nums){
    const oddNumbers = [];

    for(let i = 0; i < nums.length; i++){
        if(i % 2 != 0){
            oddNumbers.push(nums[i]);
        }
    }

    const doubleNums = oddNumbers.slice();
    const result = [];

    for(let i = 0; i < doubleNums.length; i++){
        let num = doubleNums[i] * 2;
        result.push(num);
    }

    result.reverse()

    return result.join(' ');
}

console.log(myArr([10, 15, 20, 25]));