// bai 131: Tìm giá trị nhỏ nhất trong mảng 1 chiều số thực

function question1(array) {
    if (array.length === 0) {
        return null;
    }
    let minValue = Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i];
        }
    }
    return minValue;
}
console.log(
    "cau 131: vi tri gia tri duong nho nhat la:",
    question1([7.5, 3.4, 5.6, 7.8, 9.0, 10.1, 11.2, 12.3, 0.5, 13.4])
);

// bai 132: Viết hàm tìm số chẵn đầu tiên trong mảng các số nguyên. Nếu mảng không có giá trị chẵn thì trả về  -1

function question2(array) {
    if (array.length === 0) {
        return -1;
    }
    // let firstValue = Infinity;
    let arr = [];
    for (let i = 0; i <= array.length; i++) {
        if (array[i] % 2 === 0) {
            return array[i];
        }
    }
    return -1;
}
console.log(
    "cau 132: so chan dau tien trong mang la:",
    question2([1, 8, 3, 5, 2, 7, 9])
);

// bai 133: Tìm số nguyên tố đầu tiên trong mảng 1 chiều các số nguyên. Nếu mảng không có số nguyên tố thì trả về  – 1

function question(number) {
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
function question3(array) {
    if (array.length === 0) {
        return null;
    }
    for (let i = 0; i < array.length; i++) {
        if (question(array[i])) {
            return array[i];
        }
    }
    return -1;
}
let number = [4, 6, 8, 9, 10, 11, 12];
let firstPrime = question3(number);
console.log("cau 133: so nguyen dau tien trong mang la:", firstPrime);

// bai 134: Tìm số hoàn thiện đầu tiên trong mảng 1 chiều số nguyên. Nếu mảng không có số hoàn thiện thì trả về  -1

function calculator(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum === number;
}
function question4(array) {
    if (array.length === 0) {
        return -1;
    }
    for (let i = 0; i < array.length; i++) {
        if (calculator(array[i])) {
            return array[i];
        }
    }
    return "cau 134: khong co so hoan thien: -1";
}
console.log(
    "cau 134: so hoan thien dau tien trong mang la:",
    question4([4, 6, 8, 9, 10, 14, 15, 20, 21, 22, 25])
);

// bai 135: Tìm giá trị âm đầu tiên trong mảng 1 chiều các số thực. Nếu mảng không có giá trị âm thì trả về -1

function question5(array) {
    if (array.length === 0) {
        return null;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            return array[i];
        }
    }
    return -1;
}
console.log(
    "cau 135: so am dau tien trong mang la:",
    question5([4, -6, 8, 9, 10, 14, 15, 20, 21, 22, 25])
);

// bai 136: Tìm số dương cuối cùng trong mảng số thực. Nếu mảng không có giá trị dương thì trả về  -1

function question6(array) {
    let minValue = -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > minValue) {
            minValue = array[i];
        }
    }
    return minValue;
}
console.log(
    "cau 136: so duong cuoi cung trong mang so thuc la:",
    question6([3.14, -2.5, 0.75, -1.8, 2.71828, -0.5, 4.6, -9.2, 1.2, -7.3])
);

// bai 137: Tìm số nguyên tố cuối cùng trong mảng 1 chiều các số nguyên. Nếu mảng không có số nguyên tố thì trả về  -1

function calculator1(number) {
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
function question7(array) {
    let minValue = -1;
    for (let i = 0; i < array.length; i++) {
        if (calculator(array[i])) {
            minValue = array[i];
        }
    }
    return minValue;
}
console.log(
    "cau 137: so am dau tien trong mang la:",
    question7([4, 6, 8, 9, 10, 11, 12])
);

// bai 138: Tìm số hoàn thiện cuối cùng trong mảng 1 chiều các số nguyên. Nếu mảng không có số hoàn thiện thì trả về  -1

function calculator2(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 0; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
function question8(array) {
    if (array.length === 0) {
        return null;
    }
    let minValue = -1;
    for (let i = 0; i <= array.length; i++) {
        if (array[i] > minValue) {
            minValue = array[i];
        }
    }
    return minValue;
}
console.log(
    "cau 138: so hoan thien cuoi cung trong mang la:",
    question8([4, 6, 8, 9, 10, 11, 12])
);

// bai 139: Hãy tìm giá trị âm lớn nhất trong mảng 1 chiều các số thực. Nếu mảng không có giá trị âm thì trả về  -1

function question9(array) {
    if (array.length === 0) {
        return -1;
    }
    let minValue = -Infinity;
    let condition = false;
    for (let i = 0; i <= array.length; i++) {
        if (array[i] > minValue && array[i] < 0) {
            minValue = array[i];
            condition = true;
        }
    }
    if (condition) {
        return minValue;
    }
    else {
        return -1;
    }
}
console.log('cau 139: gia tri am lon nhat trong mang la:', question9([4, 6, 8, 9, 10, 2, 9, 5, 11, 12]));




// bai 140: Hãy tìm số nguyên tố lớn nhất trong mảng 1 chiều các số nguyên. Nếu mảng không có số nguyên tố thì trả về -1

function calculator4(number) {  // tao ham tim so nguyen to
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

function question10(array) {
    let maxValue = -1;
    let condition = false;
    for (let i = 0; i <= array.length; i++) {
        if (calculator4(array[i]) && array[i] > maxValue) {
            maxValue = array[i];
            condition = true;
        }
    }
    if (condition) {
        return maxValue
    }
    else {
        return -1;
    }
}
console.log('cau 140: so nguyen to lon nhat la:', question10([2, 89, 3, 5, 7, 11, 13, 17, 19, 23, 29]));