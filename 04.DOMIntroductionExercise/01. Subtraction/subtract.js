function subtract() {
    let num1 = Number(document.getElementById('firstNumber').value);
    let num2 = Number(document.getElementById('secondNumber').value);

    const result = document.getElementById('result');

    result.innerHTML = (num1 - num2).toString();
}