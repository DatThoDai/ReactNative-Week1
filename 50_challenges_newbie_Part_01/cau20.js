// 20. Rotate an array to the left 1 position
//Xoay mảng sang trái 1 vị trí
function rotateLeft(numbers) {
    let first = numbers.shift();
    numbers.push(first);
    return numbers;
}
console.log(rotateLeft([1, 2, 3])); // [2, 3, 1]