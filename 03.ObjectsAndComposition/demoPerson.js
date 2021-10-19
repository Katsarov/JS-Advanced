const myPerson = {
    name: 'Peter',
    'last name': 'Jackson',
    age: 23
}


myPerson.age = 26;

console.log(myPerson['age']);
console.log(myPerson.age);

console.log(myPerson);

const propName = 'name';

myPerson.nationality = 'UK';

delete myPerson.age;

console.log(myPerson[propName]);
console.log(myPerson['last name']);
console.log(myPerson.age);
console.log(myPerson.nationality);

console.log(myPerson);