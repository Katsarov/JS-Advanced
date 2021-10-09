const myArr = [30, 50, 40, 10, 70];

const avr = myArr.reduce((total, nums, index, array) => {
    total += nums;
    if(index === array.length - 1){
        return total / array.length;
    } else {
        return total;
    }
});

console.log(avr);

