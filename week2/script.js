function evenOrOdd (number) {
    const result = document.getElementById('result');
    if (number % 2 == 0 && number >= 0) {
        result.innerText = `${number} is even`
    } 
    else {
        result.innerText = `${number} is odd`
    }
    
}

document.getElementById('check').addEventListener('click', function checkNumber(){
    const yourNumber = document.getElementById('yourNumber').value;
    evenOrOdd(yourNumber);
})