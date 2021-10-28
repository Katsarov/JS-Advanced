function solve6(arr){
    const productCatalogue = {};

    arr.forEach((el) => {
        let [productName, productPrice] = el.split(' : ');
        productPrice = Number(productPrice);

        // Изваждаме си първата буква от името на продукта за да създадем групата
        const index = productName[0];
        
        // Проверяваме дали вече имаме такава група. Ако не, създаваме си я.
        if(!productCatalogue[index]){
            productCatalogue[index] = {};
        }

        // След като си го имаме този обект, сега трябва да пъхнем в неги името и цената
        // Към дадения индекс (в случая А) като пропърти добавяме Anti-Bug Spray, и като велю добавяме цената
        productCatalogue[index][productName] = productPrice;
    })

    // Сега трябва да си направим първоначално сортиране на буквите в групите, т.е. ще сортираме ключовете
    let initialSort = Object.keys(productCatalogue).sort((a,b) => a.localeCompare(b));

    // Сега ще трябва да бръкнем във всяка категория, да сортираме всички елементи в нея и да ги отпечатаме
    for(const key of initialSort){
        let products = Object.entries(productCatalogue[key])
            .sort((a,b) => a[0].localeCompare(b[0]));
        
        // Отпечатваме си индекса (буквата на групата)
        console.log(key);

        // Отпечатваме елементите на групата
        products.forEach((el) => {
            console.log(`  ${el[0]}: ${el[1]}`);
        });
    }
}

solve6(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)