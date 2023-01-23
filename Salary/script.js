
function salaryCalculator (a, b) {
    const result = document.getElementById('result');
    if (b <= 7){
        const salary = a * b;
        result.innerText = salary.toString();
        
    }
    else if(b <= 9) {
         const salary = (7*a) + ((b-7) * a) + ((b-7) * 50/100 * a)
         result.innerText = salary.toString();
    }
    else {
        const salary = (7*a) + ((b-7) * a) + (2 * 50/100 * a) + (b-9) * a
        result.innerText = salary.toString();
    }
}

document.getElementById('calculate-btn').addEventListener('click', function colorchange(){
    const hours = document.getElementById('hours').value;
    const wage = document.getElementById('wage').value;
    salaryCalculator(wage, hours);
})

document.getElementById('reset-btn').addEventListener('click', function reset (){
    document.getElementById('hours').value = null;
    document.getElementById('wage').value = null;
    document.getElementById('result').innerText = '____';
})