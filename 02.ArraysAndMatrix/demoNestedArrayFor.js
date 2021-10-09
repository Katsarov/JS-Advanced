let arr = [[4, 5, 6],
            [6, 5, 4],
            [5, 5, 5]];

//console.log(arr[0][1]);

// Обхождане на масива по редове
/*for(let row of arr){
    console.log(row);
}*/

// Обхождане на масива по елементи
/*for(let row of arr){
    for(let col of row){
        console.log(col);
    }
}*/

// Обховдане на масива с .join(' ')
for(let row of arr){
    console.log(row.join(' '));
}