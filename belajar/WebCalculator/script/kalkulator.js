console.log("Selamat Anda berhasil menggunakan JavaScript pada Website");
alert("Terimakasih.");

const calculator = {
    displayNumber: '0', 
    operator: null,
    firstNumber: null,
    isWaitForSecondNumber: false,
};

function updateDisplay() {
    document.querySelector('#displayNumber').innerText = calculator.displayNumber;
}

function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.isWaitForSecondNumber = false;
}

function inputDigit(digit) {
    calculator.displayNumber += digit;
}

