function myArr(numbers){
    const oddNums = numbers.filter((index) => index % 2 == 1);
    const doubled = oddNums.map(x => x * 2);
    const revert = doubled.reverse();

    return revert.join(' ');
}
console.log(myArr([10, 15, 20, 25]));
console.log(myArr([3, 0, 10, 4, 7, 3]));