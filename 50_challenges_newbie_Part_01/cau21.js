// 21. Rotate an array to the right 1 position
//Xoay mảng sang phải 1 vị trí
function rotateRight(numbers) {
    let last = numbers.pop();
    numbers.unshift(last);
    return numbers;
}
console.log(rotateRight([1, 2, 3])); // [3, 1, 2]
