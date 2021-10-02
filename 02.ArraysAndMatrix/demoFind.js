const myArr = [5,12, 3, 45, 6];

const found = myArr.find(function(element){
    return element > 10;
});

console.log(found);