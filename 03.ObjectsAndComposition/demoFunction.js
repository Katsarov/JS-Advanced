const myPerson = {
    name: 'Peter',
    lastName: 'Jackson',
    age: 23,
    sayHy: function(){
        console.log('Hello!');
    }

    
};

const newAge = 'age';


myPerson.sayHy();
console.log(myPerson.name);
console.log(myPerson[newAge]);
