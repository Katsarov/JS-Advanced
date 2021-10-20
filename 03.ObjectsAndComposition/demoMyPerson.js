const myPerson = {
    firstName: 'Ivan',
    lastName: 'Petrov',
    age: 33,

    sayHi(){
        console.log(`${this.firstName} says hi!`);
    }
};

//myPerson.sayHi();

const mySayHi = myPerson.sayHi;

const person = {
    firstName: 'Dragan'
};

person.sayHi = mySayHi;
myPerson.sayHi();
person.sayHi();