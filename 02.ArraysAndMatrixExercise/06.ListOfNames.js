
function solve(arr){
    const result = arr.sort((a,b) => a.localeCompare(b));
    let num = 1;
    for(let el of arr){
        console.log(`${num}.${el}`)
        num++;
    }
}

solve(["John", "Bob", "Christina", "Ema"])