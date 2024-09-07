// 24. Create a function that will merge two arrays and return the result as a new array
//Tạo một hàm sẽ hợp nhất hai mảng và trả kết quả dưới dạng một mảng mới

function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2], [3, 4])); // [1, 2, 3, 4]
