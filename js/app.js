const fourDigitPin = () => {
    const pin = getPin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return fourDigitPin();
    }
}

const getPin = () => {
    const generatePin = Math.round(Math.random() * 10000);
    return generatePin;
}
// console.log(getPin());

document.getElementById('generate-btn').addEventListener('click', function () {
    const inputField = document.getElementById('pinField');
    inputField.value = fourDigitPin();
});

document.getElementById('calculator').addEventListener('click', function (e) {


    const number = e.target.innerText;
    const typedNumberField = document.getElementById('typed_number');
    const previousTypedNumber = typedNumberField.value;
    if (isNaN(number)) {
        // console.log(number);
        if (number === 'C') {
            typedNumberField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;

        }
    }

    else {
        const currentTypedNumber = previousTypedNumber + number;
        typedNumberField.value = currentTypedNumber;

    }

});

document.getElementById('verifyPin').addEventListener('click', function () {
    const pin = document.getElementById('pinField');
    const pinValue = pin.value;
    const typedPin = document.getElementById('typed_number');
    const typedPinValue = typedPin.value;
    const failure = document.getElementById('failure');
    const success = document.getElementById('message_success');
    if (pinValue == typedPinValue) {
        success.style.display = 'block';
        failure.style.display = 'none';
    }
    else {
        failure.style.display = 'block';
        success.style.display = 'none';
    }
})