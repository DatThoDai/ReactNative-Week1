// 19. Create a function that will return in an array the first “p” prime numbers greater than “n”
//Tạo một hàm sẽ trả về một mảng các số nguyên tố đầu tiên "p" lớn hơn "n"
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
function getPrimes(n, p) {
    let primes = [];
    while (primes.length < p){
        if (isPrime(n)){
            primes.push(n);
        }
        n++;
    }
    return primes;
}
console.log(getPrimes(10, 3)); // [11, 13, 17]