// 14. Print the first 10 Fibonacci numbers without recursion

let fib = [0, 1];
for (let i = 2; i < 10; i++){
    fib[i] = fib[i - 1] + fib[i - 2];
}
console.log(fib); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
