function question8(arrayA) {
    if (arrayA.length === 0) {
        return [];
    }
    let arrayB = [];
    function isPrime(number) {
        if (number < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
    for (let i = 0; i < arrayA.length; i++) {
        if (isPrime(arrayA[i])) {
            arrayB.push(arrayA[i]);
        }
    }
    return arrayB;
}

console.log("Bài 298: mảng b chứa các số nguyên tố từ mảng a:", question8([1, 2, 3, 4, 5]));
