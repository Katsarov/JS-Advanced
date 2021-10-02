const numbers = [1, 4, 9];
const root = numbers.map(function(num){
    return Math.sqrt(num)
});

console.log(root.join(' '));

// Convert numbers as strings into numbers
const numsAsStrings = ['1', '2', '3', '4'];
const nums = numsAsStrings.map(x => Number(x));

console.log(nums.join(' '));