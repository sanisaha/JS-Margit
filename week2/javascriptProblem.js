// Problem 1
// function positiveOddNumbers(){
//     let number = -1;
//     for (let i = 0; i < 50; i+=1){
//         number +=2;
//         console.log(number);
//     }
// }

// positiveOddNumbers();

// Problem 2
// function positiveEvenNumbers(){
//     let smallerNumber = 0;
//     let largerNumber = 100;
//     for (let i = 0; i <= 23; i+=1){
//         smallerNumber +=2;
//         largerNumber -=2;

//         console.log(smallerNumber);
//         console.log(largerNumber);
//     }
// }

// positiveEvenNumbers();

// Problem 3
// function distanceTimeSpeedCalculator(){
//     let distance = parseInt(prompt('distance'));
    
//     while(distance){
//         if(distance === 0){
//             return;
//         }
//         else {
//             let time = parseInt(prompt('time'));
//             alert(`average speed is ${distance / time}`)
//         }
//     }

// }
// distanceTimeSpeedCalculator();

// Problem 4

// function findEvenNumber(){
//     let number = 0;
//  for(let i = 0; i < 3; i++){
//     let newNumber = parseInt(prompt('give number'));
//     if(newNumber%2==0){
//         number = number + 1;
//     }
//  }
//  console.log(number);
 
// }
// findEvenNumber();

// Problem 5
// function averageNumbers(){
//     let sum = 0;
//     for(let i = 0; ; i++){
//         let newNumber = parseInt(prompt('give number'));
//         sum += newNumber;
//         if (newNumber == 0){
//             return sum / i;
//         }
//     }
    
// }
// averageNumbers();

// Problem 6
// function averageNumbersTwo(){
//     let sum = 0;
//     for(let i = 0; ; i++){
//         let newNumber = parseInt(prompt('give number'));
//         sum += newNumber;
//         if (i >= 25){
//             return sum / i;
//         }
//     }
    
    
// }
// averageNumbersTwo();

// Problem 7
// function yesOrNo(){
//     let sum = 0;
//     for (let i = 1; ; i++){
//         const newNumber = parseInt(prompt('give a number'));
//         const result= prompt('Do you want to continue giving numbers?(y/n)');
//         sum += newNumber;

//         if(result === 'y'){
//             continue;
//         }
//         else if(result === 'n'){
//             return sum / i;
//         }
//     }
// }

// yesOrNo();

// Problem 8
// function smallestNumber(){
//     let smallNumber;
//     const totalNumber = parseInt(prompt('how many numbers want to input'))
//     for (let i = 0; i < totalNumber; i++){
//         let inputNumber = parseInt(prompt('your number'));
//         if (i === 0){
//             smallNumber = inputNumber
//         }
//         if (inputNumber < smallNumber) {
//             smallNumber = inputNumber;
//         }
//         }
//         console.log(smallNumber);
// }