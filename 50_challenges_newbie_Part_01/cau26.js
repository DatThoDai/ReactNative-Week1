// 26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second
//Tạo một hàm sẽ nhận hai mảng và trả về một mảng với các phần tử ở trong mảng đầu tiên nhưng không ở trong mảng thứ hai

function getUniqueElements(arr1, arr2) {
    let uniqueElements = [];
    for (let element of arr1){
        if (!arr2.includes(element)){
            uniqueElements.push(element);
        }
    }
    return uniqueElements;
}
console.log(getUniqueElements([1, 2], [2, 3])); // [1]