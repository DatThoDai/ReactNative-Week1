// 12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers

function getPositives(numbers) {
    let positiveNumbers = [];
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] > 0){
            positiveNumbers.push(numbers[i]);
        }
    }
    return positiveNumbers;
}
console.log(getPositives([1, -3, 5, -3, 0])); // [1, 5]
