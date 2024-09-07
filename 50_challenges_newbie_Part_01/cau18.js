// 18. Print the first 100 prime numbers

let count = 0;
let n = 2;
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
while (count < 100){
    if (isPrime(n)){
        console.log(n);
        count++;
    }
    n++;
}
