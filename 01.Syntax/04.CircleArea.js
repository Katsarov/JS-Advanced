function radius(r){
    if(typeof(r) === 'number'){
        let area = Math.PI * r ** 2;
        console.log(Number(area.toFixed(2)));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(r)}.`);
    }
}

radius(5);
radius('hello');