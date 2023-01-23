function randomNumbers (first, second, third){
    const result = document.getElementById('myResult');
    if ( first >= 0 || second >= 0 || third >= 0){
        result.innerText = `total sum = ${first + second + third}`;
    }
    else if (first >= 0 && second >= 0 && third >= 0) {
        result.innerText = `total multiplication = ${first * second * third}`;
    }
    else if (first < 0 && second < 0 && third < 0){
        result.innerText = 'only negatives';
    }
}

document.getElementById('calculate').addEventListener('click', function checkNumber(){
    const yourFirstNumber = document.getElementById('first').value;
    const yourSecondNumber = document.getElementById('second').value;
    const yourThirdNumber = document.getElementById('third').value;
    randomNumbers(parseInt(yourFirstNumber), parseInt(yourSecondNumber), parseInt(yourThirdNumber));
})