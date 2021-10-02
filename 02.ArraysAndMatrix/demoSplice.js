const myArr = [10, 20, 30, 40, 50, 60, 70];

console.log(myArr.join(' '));

//myArr.splice(1, 1);

//console.log(myArr.join(' '));

const removed = myArr.splice(2, 3);
console.log(removed.join(' '));

removed.splice(1,0, 35, 36, 37);
console.log(removed.join(' '));

console.log(myArr.join(' '));
