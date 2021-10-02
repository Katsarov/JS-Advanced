const myArr = [9, 3, 6, 13, 7, 1, 4];

console.log(myArr.join(' '));

myArr.sort();

console.log(myArr.join(' '));

//myArr.sort(compareNumbers);

// Variant 1
/*function compareNumbers(a, b){
    if(a > b){
        return 1;
    } else if(a == b){
        return 0;
    } else{
        return -1;
    }
}
console.log(myArr.join(' '));*/

// Variant 2
/*function compareNumbers(a, b){
    return a - b;
}
console.log(myArr.join(' '));*/

// Variant 3 --> annonimus function (lambda function)
myArr.sort((a, b) => {
    return a - b;
});
console.log(myArr.join(' '));

myArr.sort((a, b) => b - a);
console.log(myArr.join(' '));