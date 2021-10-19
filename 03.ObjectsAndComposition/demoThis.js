const person = {
    firstName: 'Peter',
    lastName: 'Jackson',
    fullName(){
        return this.firstName + ' ' + this.lastName;
    }
};

console.log(person.fullName());