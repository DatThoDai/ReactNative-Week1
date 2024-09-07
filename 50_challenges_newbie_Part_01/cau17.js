// 17. Calculate the sum of digits of a positive integer number

let sum = 0;
let number = 12345;
let strNumber = number.toString();
for (let i = 0; i < strNumber.length; i++){
    sum += parseInt(strNumber[i]);
}
console.log(sum); // 15