// 15. Create a function that will find the nth Fibonacci number using recursion

function findFibonacci(n) {
    if (n <= 1){
        return n;
    }
    return findFibonacci(n - 1) + findFibonacci(n - 2);
}
console.log(findFibonacci(10)); // 55
