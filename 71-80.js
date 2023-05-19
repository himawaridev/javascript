// bai 71: Tính S(x, n) = 1 – x + x^3/3! – x^5/5! + … + (-1)^n+1 * x^2n+1/(2n + 1)!

function question1(x, n) {
    let sum = 0;
    let count = 1;
    let factorial = 1;
    for (let i = 0; i <= n; i++) {
        factorial *= (2 * i + 1);
        count = Math.pow(-1, i + 1) * (Math.pow(x, 2 * i + 1)) / factorial;
        sum += count;
    }
    console.log('cau 71: ', sum);
}
question1(2, 3);



// bai 72: Kiểm tra số nguyên 4 byte có dạng 2^k hay không

function question2(number) {
    return (number & (number - 1)) === 0;
    if (question2(number)) {
        console.log(number + ' có dạng 2^k.');
    } else {
        console.log(number + ' không có dạng 2^k.');
    }
}
question2(16);




// bia 73: Kiểm tra số nguyên 4 byte có dạng 3^k hay không
function question3() {
    function isPowerOfThree(num) {
        const logarithm = Math.log(num) / Math.log(3);
        return Number.isInteger(logarithm);
    }
    const number = 81; 
    if (isPowerOfThree(number)) {
        console.log(number + ' có dạng 3^k.');
    } else {
        console.log(number + ' không có dạng 3^k.');
    }
}

