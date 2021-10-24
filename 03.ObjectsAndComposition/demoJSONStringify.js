let obj = {name: "John", age: 30, city: "New York"};
let myJSON = JSON.stringify(obj);

console.log(myJSON);


let arr = ["John", "Kate", "Teodor", "Anna"];
let myNewJSON = JSON.stringify(arr, null, 2);

console.log(myNewJSON);