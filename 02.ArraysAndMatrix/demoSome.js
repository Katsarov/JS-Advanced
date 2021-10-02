const myArr = [1, 2, 3, 7, 5];
const isEven = function(element){
    return element % 2 === 0;
};

console.log(myArr.some(isEven));