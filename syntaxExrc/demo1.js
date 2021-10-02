let str = "test string";
//console.log(str.length);
console.log(str[2]);
console.log(str.charAt());

function prevDay(year, month, day){
    const date = new Date(year, month, day);

    console.log(date);
    console.log(date.toLocaleDateString());
    console.log(date.toLocaleString());
    console.log(date.toLocaleTimeString());

    console.log(date.getFullYear(), date.getMonth(), date.getDate());
}

prevDay(2016, 9, 30);