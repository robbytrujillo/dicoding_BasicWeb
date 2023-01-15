//console.log("Selamat Anda berhasil menggunakan JavaScript pada Website");
//alert("Terimakasih.");

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
    if (calculator.displayNumber === '0') {
        calculator.displayNumber = digit;
    } else {
        calculator.displayNumber += digit;
    }
    
}

const buttons = document.querySelectorAll('.button');
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        //mendapatkan objek elemen yang diklik
        const target = event.target;

        inputDigit(target.innerText);
        updateDisplay();
    });
}

for (const button of buttons) {
    button.addEventListener('click', function(event) {
        //mendapatkab objek elemen yang diklik
        const target = event.target;

        if (target.classList.contains('clear')) {
            clearCalculator();
            updateDisplay();
            return;
        }

        inputDigit(target.innerText);
        updateDisplay();
    });
}

