// 13. Find the maximum number in an array of numbers

let numbers = [1, 2, 3, 4, 5];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++){
    if (numbers[i] > max){
        max = numbers[i];
    }
}
console.log(max); // 5
