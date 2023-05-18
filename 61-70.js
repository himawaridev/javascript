// bai 61: Giải phương trình bậc 1 ax + b = 0.

function question1(a, b) {
    if (a === 0) {
        if (b === 0) {
            return "Phương trình vô số nghiệm";
        } else {
            return "Phương trình vô nghiệm";
        }
    } else {
        let x = -b / a;
        return `Nghiệm của phương trình là x = ${x}`;
    }
}
console.log('cau 61:', question1(3, 4));


// bai 62: Giải phương trình bậc 2 ax^2 + bx + c = 0.

function question2(a, b, c) {
    if (a === 0) {
        if (b === 0) {
            if (c === 0) {
                return "Phương trình có vô số nghiệm";
            } else {
                return "Phương trình vô nghiệm";
            }
        } else {
            return "Phương trình có nghiệm x = " + (-c / b);
        }
    } else {
        let delta = Math.pow(b, 2) - 4 * a * c;
        if (delta < 0) {
            return "Phương trình vô nghiệm";
        } else if (delta === 0) {
            return "Phương trình có nghiệm kép x = " + (-b / (2 * a));
        } else {
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2 * a);
            return "Phương trình có hai nghiệm phân biệt x1 = " + x1 + " và x2 = " + x2;
        }
    }
}
console.log('cau 62: ', question2(2, 5, 3)); // "Phương trình có 2 nghiệm phân biệt x1 = -1, x2 = -1.5"
console.log('cau 62: ', question2(1, -2, 1)); // "Phương trình có nghiệm kép x = 1"
console.log('cau 62: ', question2(0, 4, 5)); // "Phương trình có nghiệm x = -1.25"
console.log('cau 62: ', question2(0, 0, 5)); // "Phương trình vô nghiệm"
console.log('cau 62: ', question2(0, 0, 0)); // "Phương trình vô số nghiệm"
console.log('cau 62: ', question2(0, 5, 0)); // "Phương trình có nghiệm x = 0"
console.log('cau 62: ', question2(2, 0, 3)); // "Phương trình vô nghiệm"



// bai 63: Giải phương trình bậc 4 ax^4 + bx^3 + cx^2 + dx + e = 0


// bai 64: Tính S(x, n) = x – x ^ 2 + x ^ 3 + … + (-1) ^ n + 1 * x ^ n

function question4(x, n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        let sum = Math.pow(-1, i + 1) * Math.pow(x, i);  // (-1) ** (i + 1) * x ** i;
        result += sum;
    }
    return result;
}
console.log('cau 64: ', question4(3, 4));  // correct ans



// bai 65: -x ^ 2 + x ^ 4 + … + (-1) ^ n * x ^ 2n

function question5(x, n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += Math.pow(-1, i) * Math.pow(x, 2 * i);  // (-1) ** (i + 1) * x ** 2 * i;
    }
    return sum;
}
console.log('cau 65: ', question5(2, 3));  // same



// bai 66: Tính S(x, n) = x – x ^ 3 + x ^ 5 + … + (-1) ^ n * x ^ 2n + 1

function question6(x, n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += Math.pow(-1, i) * Math.pow(x, 2 * i + 1);
    }
    return sum;
}
console.log('cau 66: ', question6(2, 3));  // correct ans



// bai 67: Tính S(n) = 1 – 1 / (1 + 2) + 1 / (1 + 2 + 3) + … + (-1) ^ n + 1 * 1 / (1 + 2 + 3 + … + n)

function question7(number) {
    let sum = 0;
    let count = 0;
    for (let i = 1; i <= number; i++) {
        count += i;
        sum += Math.pow(-1, i + 1) * 1 / count;
    }
    console.log('cau 67: ', sum);  // Example usage: n = 4
}
question7(4);


// ba 68: Tính S(x, n) = -x + x^2/(1 + 2) – x^3/(1 + 2 + 3) + … + (-1)^n * x^n/(1 + 2 +… + n)

function question8(x, n) {
    let sum = 0;
    let count = 0;
    for (let i = 1; i <= n; i++) {
        count += i;
        sum += Math.pow(-1, i) * (Math.pow(x, i)) / count;
    }
    console.log('cau 68: ', sum);
}
question8(2, 3);



// bai 69: Tính S(x, n) = – x + x^2/2! – x^3/3! + … + (-1)^n * x^n/n!

function question9(x, n) {
    let sum = 0;
    let factorial = 1;
    let count = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
        count = Math.pow(-1, i) * Math.pow(x, i) / factorial;
        sum += count;
    }
    console.log('cau 69: ', sum);
}
question9(2, 3);


// bai 70: Tính S(x, n) = -1 + x^2/2! – x^4/4! + … + (-1)^n+1 * x^2n/(2n)!

function question10(x, n) {
    let sum = 0;
    let factorial = 1;
    let count = 0;
    for (let i = 1; i <= n; i++) {
        factorial *= (2 * i);  // 2n!
        count = Math.pow(-1, i + 1) * Math.pow(x, 2 * i) / factorial;  // (-1)^n+1 * x^2n/(2n)!
        sum += count;
    }
    console.log('cau 70: ', sum);
}
question10(2, 3);