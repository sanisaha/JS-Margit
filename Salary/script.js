
function salaryCalculator (hours, salary) {
    const result = document.getElementById('result');
    if (salary <= 7){
        const totalSalary = hours * salary;
        result.innerText = totalSalary.toString();
        
    }
    else if(salary <= 9) {
         const totalSalary = (7*hours) + ((salary-7) * hours) + ((salary-7) * 50/100 * hours)
         result.innerText = totalSalary.toString();
    }
    else {
        const totalSalary = (7*hours) + ((salary-7) * hours) + (2 * 50/100 * hours) + (salary-9) * hours
        result.innerText = totalSalary.toString();
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