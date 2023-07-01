// bai 11: Tính S(n) = 1 + 1.2 + 1.2.3 + … + 1.2.3….N
function calculateDiv(number) {
    let value = 1;
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        value *= i;
        sum += value;
    }
    // return sum;
    console.log('cau 11:', sum);
}
calculateDiv(5);



// bai 12: Tính S(n) = x + x^2 + x^3 + … + x^n
function calculateDiv1(number) {
    let x = 1;
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + (x ** i);
    }
    console.log('cau 12: ', sum);
}
calculateDiv1(5);




// bai 13: Tính S(n) = x^2 + x^4 + … + x^2n
function calculateDiv2(number) {
    let x = 1;
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        let term = Math.pow(x, 2 * i);
        sum += term;
    }
    console.log('cau 13: ', sum);
}
calculateDiv2(5);



// bai 14: Tính S(n) = x + x^3 + x^5 + … + x^2n + 1
function calculateDiv3(number) {
    let x = 1;
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum = sum + ((x ** (i * 2)) + 1);
    }
    console.log('cau 14: ', sum);
}
calculateDiv3(5);



// bai 15: Tính S(n) = 1 + 1/1 + 2 + 1/ 1 + 2 + 3 + ….. + 1/ 1 + 2 + 3 + …. + N
function calculateDiv4(number) {
    let value = 1;
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
        sum += value;
    }
    // return sum;
    console.log('cau 15:', sum);
}
calculateDiv4(2);



// bai 16: Tính S(n) = x + x^2/1 + 2 + x^3/1 + 2 + 3 + … + x^n/1 + 2 + 3 + …. + N
function calculateDiv5(number) {
    let value = 1;
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        value += i;
        sum += value;
    }
    // return sum;
    console.log('cau 16:', sum);
}
calculateDiv5(1);



// bai 17 S(n) = x + x^2/2! + x^3/3! + … + x^n/N!
function calculateDiv6(value, number) {
    let sum = 0;
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
        sum += (value ** i) / factorial;
    }
    console.log('cau 17:', sum);
}
calculateDiv6(1, 3);

// bai 18 S(n) = 1 + x^2/2! + x^4/4! + … + x^2n/(2n)!

function calculateDiv7(value, number) {
    let sum = 1;
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= 2 * i * (2 * i - 1);
        sum += (value ** (2 * i)) / factorial;
    }
    console.log('cau 18:', sum);
}
calculateDiv7(1, 10);


// bai 19 S(n) = 1 + x + x^3/3! + x^5/5! + … + x^(2n+1)/(2n+1)!

function calculateDiv8(value, number) {
    let sum = 1;
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= 2 * i * (2 * i + 1);
        sum += (value ** (2 * i + 1)) / factorial + 1;
    }
    console.log('cau 19:', sum);
}
calculateDiv8(1, 3);


// bai 20: Liệt kê tất cả các “ước số” của số nguyên dương n
function calculateDiv9(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            console.log ('cau 20: ',i);
        }
    }
}
calculateDiv9(12);