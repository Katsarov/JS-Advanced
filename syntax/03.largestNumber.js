/*function largest(a, b, c){
    let result;
    if(a > b){
        if(a > c){
            result = a;
        } else {
            result = c;
        }
    } else if (b > c) {
        result = b;
    } else {
        result = c
    }

    console.log(`The largest number is ${result}.`);
}*/

function largestNum (... params){
    console.log(`The largest number is ${Math.max(... params)}.`);
}

largestNum(16,2,35,54,1111,259);
largestNum(5,214,67);
