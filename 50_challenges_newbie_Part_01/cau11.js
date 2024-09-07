// 11. Calculate the average of the numbers in an array of numbers

let sum = 0;
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
let average = sum / numbers.length;
console.log(average); // 3