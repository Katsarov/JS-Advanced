const myArr = [10, 20, 30, 40, 50, 60, 70];

//const[el1, el2, ...rest] = myArr;
//console.log(el1, el2, rest);

const[...rest] = myArr;
console.log(myArr);
console.log(rest);
rest[2] = 5;
console.log(myArr);
console.log(rest);






