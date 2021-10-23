

const printer = {
    name: 'ACME Printer',
    print
};

const scanner = {
    name: 'Initech Scanner',
    scan
};

const copier = {
    name: 'ComTron Copier',
    print,
    scan
}

function print(){
    console.log(`${this.name} is printing a page`)
}

function scan(){
    console.log(`${this.name} is scanning a document`)
}

printer.print();
scanner.scan();

copier.print();
copier.scan();

console.log(typeof scanner.scan);
console.log(typeof scanner.print);

if(typeof scanner.scan == 'function'){
    console.log('This device can scan!')
} else {
    console.log('This device can not scan!')
};

