function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        // console.log('Ei khane 4 digit number nai', pin);
        return getPin();
    }

}

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random
}
document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = generatePin();

    //display-pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin
})
document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;

    //'C' or '<' er kaj koranor jonno eta ei khaen ana hoyeceh na hole seta 44 number line e thakto

    const typeNumberField = document.getElementById('typed-numbers');
    const priviousTypeNumber = typeNumberField.value
    if (isNaN(number)) {
        if (number === 'C') {
            typeNumberField.value = '';
        }
        else if (number === '<') {
            const digits = priviousTypeNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;

        }
    }
    else {
        /*
         const typeNumberField = document.getElementById('typed-numbers');
            const priviousTypeNumber = typeNumberField.value 
         */
        const newTypeNumber = priviousTypeNumber + number
        typeNumberField.value = newTypeNumber;
    }
})
document.getElementById('verify-pin').addEventListener('click',function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typeNumberField = document.getElementById('typed-numbers');
    const typeNumber = typeNumberField.value;

    const pinSuccessMassege = document.getElementById('pin-success');
    const pinFailureMassege = document.getElementById('pin-failure');

    if (typeNumber === currentPin){

        pinSuccessMassege.style.display = 'block'
        pinFailureMassege.style.display='none'
    }
    else{
        
        pinFailureMassege.style.display='block'
        pinSuccessMassege.style.display = 'none'
    }
})