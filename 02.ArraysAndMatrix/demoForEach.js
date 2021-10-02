const items = ['item1', 'item2', 'item3'];
const copy = [];

/*for(let i = 0; i < items.length; i++){
    copy.push(items[i]);
}*/

items.forEach(item => copy.push(item));

console.log(copy.join('\n'));