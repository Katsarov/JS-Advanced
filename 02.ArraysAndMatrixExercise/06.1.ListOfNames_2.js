function solve(arr){
    arr.sort();
    arr.forEach((el, index) =>{
        console.log(`${++index}.${el}`);
    });
}

solve(["John", "Bob", "Christina", "Ema"])