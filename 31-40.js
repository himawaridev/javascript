// bai 31: Cho số nguyên dương n. Kiểm tra xem n có phải là số nguyên tố hay không

function calculateDiv1(number) {
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
console.log('cau 31 ', calculateDiv1(2));


// bai 32: Cho số nguyên dương n. Kiểm tra xem n có phải là số chính phương hay không

function calculateDiv2(number) {
    return Math.sqrt(number) === Math.floor(Math.sqrt(number));
}
console.log('cau 32: ', calculateDiv2(16));


// bai 33: Tính S(n) = CanBac2(2+CanBac2(2+….+CanBac2(2 + CanBac2(2)))) có n dấu căn 

function calculateDiv3(number) {
    let sum = Math.sqrt(Math.floor(2))
    for (let i = 0; i <= number; i++) {
        sum = Math.sqrt(2 + sum);
    }
    console.log('cau 33: ', sum);
}
calculateDiv3(3);


// bai 34: Tính S(n) = CanBac2(n+CanBac2(n – 1 + CanBac2( n – 2 + … + CanBac2(2 + CanBac2(1)  có n dấu căn

function calculateDiv4(n) {
    if (n === 1) {
        return 1;
    } else {
        return Math.sqrt(n + calculateDiv4(n - 1));
    }
}

console.log('cau 34: ', calculateDiv4(5));

// bai 35 Tính S(n) = CanBac2(n! + CanBac2((n-1)! + CanBac2((n – 2)! + … + CanBac2(2!) + CanBac2(1!)))) có n dấu căn

function calculateDiv5(n) {
    let result = 1; // Gán giá trị khởi tạo cho biến kết quả
    for (let i = n; i >= 1; i--) {
        let factorial = calculateFactorial(i); // Tính giai thừa của số i
        result = Math.sqrt(factorial + result); // Tính căn bậc hai và cộng vào kết quả
    }
    return result;
}
function calculateFactorial(num) {
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log("cau 35: ", calculateDiv5(5));

// no idea
