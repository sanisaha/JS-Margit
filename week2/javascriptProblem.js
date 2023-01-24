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

// Problem 9

function twoBiggestNumbers (){
    let firstBiggestNumber;
    let secondBiggestNumber;
    for (let i = 0; i < 4; i++){
        let inputNumbers = parseInt(prompt('put your number here'));
        if(i === 0){
            firstBiggestNumber = inputNumbers;
        }
        if (i === 1){
            secondBiggestNumber = inputNumbers;
        }
        if(inputNumbers < firstBiggestNumber){
            if(inputNumbers>secondBiggestNumber){
                secondBiggestNumber = inputNumbers;
            }
        }
        if (inputNumbers > firstBiggestNumber){
            secondBiggestNumber = firstBiggestNumber;
            firstBiggestNumber = inputNumbers;
        }
    }
    
    console.log(firstBiggestNumber, secondBiggestNumber);
}
twoBiggestNumbers();
// Problem 10

// function sumAndAverage (){
//     let sum = 0;
//     let count = 0;
//     let smallestNumber;
//     let biggestNumber;
//     for (let i = 0; i < 4; i++){
//         let inputNumbers = parseInt(prompt('put your number here'));
//         sum+=inputNumbers;
//         count++;
//         if (i === 0){
//             smallestNumber = inputNumbers;
//             biggestNumber = inputNumbers;
//         }
//         if (inputNumbers > biggestNumber){
//             biggestNumber = inputNumbers;
//         }
//         if(inputNumbers < smallestNumber){
//             smallestNumber = inputNumbers;
//         }
//     }
//     console.log(`average = ${sum / count}, sum = ${sum}, Biggest Number = ${biggestNumber}, Smallest Number = ${smallestNumber}`)
// }

// function addLength(str) { let newA = [];
//     const arr = str.split(' ');
//      arr.map(word => {newA.push(`${word} ${word.length}`)}) 
//      console.log(newA)
//    }
// addLength('hello john');