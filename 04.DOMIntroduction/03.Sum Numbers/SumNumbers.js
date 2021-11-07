function calc() {
    // read value of two input fields
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);

    // sum values
    const sum = num1 + num2;

    if(Number.isNaN){
        document.getElementById('sum').value = 'Error! Please enter numbers'
    } else {
         // set result as value of output field
        document.getElementById('sum').value = sum;
    }
}
