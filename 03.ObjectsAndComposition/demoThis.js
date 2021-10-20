const person = {
    firstName: 'Peter',
    lastName: 'Jackson',
    fullName(){
        return this.firstName + ' ' + this.lastName;
    }
};

console.log(person.fullName());

const myPerson = {
    firstName: 'Tomo',
    lastName: 'Peterson',
    fullName(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
};

myPerson.fullName();