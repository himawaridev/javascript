// bai 1 ///////////////////////////////////
function calculateSum(size) {
    let sum = 0;
    for (let i = 1; i <= size; i++) {
        sum = sum + i;
    }
    console.log('cau 1: ', sum)
}
calculateSum(3);

// bai 2
function calculatePow2(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + (i ** 2)
    }
    console.log('cau 2: ', sum)
}
calculatePow2(3);

// bai 3
function calculateDiv(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + (1 / i)
    }
    console.log('cau 3: ', sum)
}
calculateDiv(5);

// bai 4
function calculateDiv1(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + (1 / (i * 2));
    }
    console.log('cau 4: ', sum);
}
calculateDiv1(5);

// bai 5
function calculateDiv2(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum = sum + (1 / (i * 2 + 1));
    }
    console.log('cau 5: ', sum);
}
calculateDiv2(2);

// bai 6
function calculateDiv3(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + (1 / i * (i + 1));
    }
    console.log('cau 6: ', sum);
}
calculateDiv3(2);

// bai 7
//numerator: tu so
//denominator: mau so
function calculateDiv4(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + (i / (i + 1));
    }
    console.log('cau 7: ', sum);
}
calculateDiv4(3);


// bai 8
function calculateDiv5(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum = sum + ((2 * i + 1) / (2 * i + 2));
    }
    console.log('cau 8: ', sum);
}
calculateDiv5(1);


// bai 9
function calculateDiv6(number) {
    let sum = 1;
    for (let i = 1; i <= number; i++) {
        sum = sum * i;
    }
    console.log('cau 9: ', sum);
}
calculateDiv6(4);


// bai 10 : Tính T(x, n) = x^n

function question10(x, n) {
    let sum = Math.pow(x, n);
    console.log('cau 10: ', sum);
}
question10(2, 3)