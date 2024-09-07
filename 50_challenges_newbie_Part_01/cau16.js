// 16. Create a function that will return a Boolean specifying if a number is prime

function isPrime(n) {
    if (n < 2){
        return false;
    }
    for (let i = 2; i < n; i++){
        if (n % i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(11)); // true
console.log(isPrime(12)); // false