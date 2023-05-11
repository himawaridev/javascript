// bai 21: Tính tổng tất cả các “ ước số” của số nguyên dương n

function calculateDiv1(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    console.log('cau 21: ', sum);
}
calculateDiv1(4);


//bai 22: Tính tích tất cả các “ước số” của số nguyên dương n
function calculateDiv2(number) {
    let sum = 1;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            sum *= i;
        }
    }
    console.log('cau 22: ', sum);
}
calculateDiv2(4);


// bai 23: Đếm số lượng “ước số” của số nguyên dương n

function calculateDiv3(number) {
    let count = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            count++;
        }
    }
    console.log('cau 23: ', `${count}`);
}
calculateDiv3(6);


// bai 24: Liệt kê tất cả các “ước số lẻ” của số nguyên dương n

function calculateDiv4(number) {
    for (let i = 1; i <= number; i++) {
        if (number % i === 0 && i % 2 !== 0) {
            console.log('cau 24: ', i);
        }
    }
}
calculateDiv4(12);


// bai 25: Tính tích tất cả các “ước số lẻ” của số nguyên dương n

function calculateDiv5(number) {
    let sum = 1;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0 && i % 2 !== 0) {
            sum *= i;
        }
    }
    console.log('cau 25: ', sum);
}
calculateDiv5(12);


// bai 26: Tính tổng tất cả các “ước số chẵn” của số nguyên dương n

function calculateDiv6(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0 && i % 2 === 0) {
            sum += i;
        }
    }
    console.log('cau 26: ', sum);
}
calculateDiv6(4);


// bai 27: Đếm số lượng “ước số chẵn” của số nguyên dương n


function calculateDiv7(number) {
    let count = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0 && i % 2 === 0) {
            count++;
        }
    }
    console.log('cau 27: ', `${count}`);
}
calculateDiv7(12);


//bai 28 Cho số nguyên dương n. Tính tổng các ước số nhỏ hơn chính nó


function calculateDiv8(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    console.log('cau 28: ', sum);
}
calculateDiv8(12);


// bai 29 Tìm ước số lẻ lớn nhất của số nguyên dương n. Ví dụ n = 100 ước lẻ lớn nhất là 25


function calculateDiv9(number) {
    let sum = 1;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0 && i % 2 !== 0) {
            sum = i;
        }
    }
    console.log('cau 29: ', sum);
}
calculateDiv9(12);


// bai 30: Cho số nguyên dương n. Kiểm tra xem n có phải là số hoàn thiện hay không

function calculateDiv10(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    if (number === sum) {
        console.log('cau 30: ', true);
    }
    else {
        console.log('cau 30: ', false);
    }
}
calculateDiv10(6);

