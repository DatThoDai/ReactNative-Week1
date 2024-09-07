// 25. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
//Tạo một hàm sẽ nhận hai mảng số làm đối số và trả về một mảng gồm tất cả các số mà hoặc ở trong mảng đầu tiên hoặc mảng thứ hai nhưng không ở trong cả hai mảng
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

function getUniqueElements(arr1, arr2) {
    let mergedArray = mergeArrays(arr1, arr2);
    let uniqueElements = [];
    for (let element of mergedArray){
        if (!arr1.includes(element) || !arr2.includes(element)){
            uniqueElements.push(element);
        }
    }
    return uniqueElements;
}
console.log(getUniqueElements([1, 2], [2, 3])); // [1, 3]