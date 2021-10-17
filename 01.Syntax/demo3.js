/*function foo(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

foo(5, "stars");

function ide(b){
    return b;
}

console.log(ide(555));



function eho(word) {
    console.log(word.toLowerCase());
    console.log(word);
    console.log(word.length);
}

eho("Hello, JavaScript!");*/

/**
 * 
 * @param {*string} a 
 * @param {*} b 
 * @param {*} c 
 */

function params(a, b, c){
    let result = a.length + b.length + c.length;
    console.log(result);
    console.log(Math.floor(result / 3));
}

params("chocolate", "ice cream", "cake");
