function gasolineCalculator (price, money) {
    const answer = document.getElementById('answer');
    const fullResult = parseInt(money) / parseInt(price);
    const result = Math.round(fullResult);
    if (result > 10){
        answer.innerText = `You could get about ${result.toString()} liters, good, now you can escape`;
        
    }
    else if (result < 10) {
         answer.innerText = `You could get about ${result.toString()} liters, Ups, you have to stay here.`;
    }
}

document.getElementById('calculate').addEventListener('click', function calculatePrice(){
    const price = document.getElementById('price').value;
    const money = document.getElementById('money').value;
    gasolineCalculator(price, money);
})

document.getElementById('reset').addEventListener('click', function reset (){
    document.getElementById('price').value = null;
    document.getElementById('money').value = null;
    document.getElementById('answer').innerText = '';
})