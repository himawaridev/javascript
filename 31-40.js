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

console.log(calculateS(5));

// bai 35 Tính S(n) = CanBac2(n! + CanBac2((n-1)! +CanBac2((n – 2)! + … + CanBac2(2!) + CanBac2(1!)))) có n dấu căn

function calculateDiv5(n) {
    if (n === 1 || n === 0) {
        return 1;
    } else {
        return n * calculateDiv5(n - 1);
    }
}

function calculateS(n) {
    if (n === 1) {
        return 1;
    } else {
        return Math.sqrt(calculateDiv5(n) + calculateS(n - 1));
    }
}

console.log(calculateS(5));