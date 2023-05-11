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
        Math.sqrt(2 + Math.sqrt(i));
        console.log(i);
    }
}
calculateDiv3(3);