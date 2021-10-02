const myArr = ['Peter', 'George', 'John', 'mary', 'Anne'];
console.log(myArr.join(' '));

myArr.sort();
console.log(myArr.join(' '));

myArr.sort((a, b) => a.localeCompare(b));
console.log(myArr.join(' '));