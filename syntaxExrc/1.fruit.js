function calc(product, grams, money){
    let weight = grams / 1000;
    let price = (weight * money);

    console.log(`I need $${price.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${product}.`)
}

calc('orange', 2500, 1.80);
calc('apple', 1563, 2.35);