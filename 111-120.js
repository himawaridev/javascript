//bai 111: Liệt kê tất cả các số nguyên tố nhỏ hơn n

function question1(number) {
    if (number < 2) {
        console.log('cau 111: gia tri nhap vao sai');
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
function count(n) {
    let array = [];

    for (let i = 2; i < n; i++) {
        if (question1(i)) {
            array.push(i);
        }
    }

    return array;
}

let n = 10;
let arrayNumbers = count(n);
console.log('cau 111: ', arrayNumbers);




// bai 112 : Liệt kê tất cả các số chính phương nhỏ hơn n

function question2(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        if (Math.sqrt(i) % 1 === 0) {
            array.push(i);
        }
    }
    console.log('cau 112: ', array);
}
question2(24);



// bai 113: Viết hàm tìm giá trị lớn nhất trong mảng 1 chiều các số thực

function question3(array) {
    if (array.length === 0) {
        return null;
    }
    let maxValue = array[0];
    for (let i = 1; i <= array.length; i++) {
        if (maxValue < array[i]) {
            maxValue = array[i];
        }
    }
    console.log('cau 113: ', maxValue);
}
question3([3.75, -2.15, 0.99, 6.42, -1.33, 2.18, -3.14, 0.67, 8.91, -2.76, 4.35, -1.12, 2.99, -5.21, 1.11, 7.08]);



// bai 114: Viết hàm tìm 1 vị trí mà giá trị tại vị trí đó là giá trị nhỏ nhất trong mảng 1 chiều các số nguyên

function question4(array) {
    if (array.length === 0) {
        return null;
    }
    let minValue = array[0];
    for (let i = 0; i <= array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i];
        }
    }
    console.log('cau 114: ', minValue);
}
question4([-10, 7, 2, -9, 5, 0, 1, -4, 8, -6, 3, -2, 10, -1, 6, -5, 4, -7, 9, -11]);



// Bài 115: Viết hàm kiểm tra trong mảng các số nguyên có tồn tại giá trị chẵn nhỏ hơn 2004 hay không

function question5(array) {
    if (array.length === 0) {
        return null;
    }
    let even = array[0];
    for (let i = 0; i <= array.length; i++) {
        if (array[i] % 2 === 0 && array[i] < 2004) {
            return true;
        }
    }
    return false;
}
let arr = [2756, -142, 1574, 2451, -768, 2966, -2119, 287, 2190, -2036, 1381, -2025, 2675, 1905, -2724, 1467, 2674, -2523, 2079, 1802];
let printValue = question5(arr);

if (printValue) {
    console.log('cau 115: Có tồn tại số chẵn nhỏ hơn 2004 trong mảng.');
} else {
    console.log('cau 115: Không tồn tại số chẵn nhỏ hơn 2004 trong mảng.');
}




// bai 116: Viết hàm đếm số lượng số nguyên tố nhỏ hơn 100 trong mảng

function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}
function question6(array) {
    if (array.length === 0) {
        return null;
    }
    let count = 0;
    for (let i = 0; i <= array.length; i++) {
        if (array[i] < 100 && isPrime(array[i])) {
            count++
        }
    }
    return count;
}

let numbers = [2, 7, 15, 23, 50, 97, 101];
let primeCount = question6(numbers);

console.log("cau 116: Số lượng số nguyên tố nhỏ hơn 100 trong mảng là: " + primeCount);



// bai 117: Viết hàm tính tổng các giá trị âm trong mảng 1 chiều các số thực


function question7(array) {
    let sum = 0;
    if (array.length === 0) {
        return null;
    }
    for (let i = 0; i <= array.length; i++) {
        if (array[i] < 0) {
            sum += array[i];
        }
    }
    console.log('cau 117: ', sum);
}
question7([3.14, -5.5, 2.71828, 0.5, -10.75, 1.618, -2.3, 4.2, -0.25, 7.8, -1.333, 6.01, -9.99]);

// bai 118: Viết hàm nhập, xuất mảng 1 chiều các số thực
// bai 119: Viết hàm nhập, xuất mảng 1 chiều các số nguyên
// bai 120: Viết hàm liệt kê các giá trị chẵn trong mảng 1 chiều các số nguyên


function question10(array) {
    if (array === 0) {
        return null;
    }
    for (let i = 0; i <= array.length; i++) {
        if (array[i] % 2 === 0) {
            console.log(array[i]);
        }
    }
}
question10([-2, 5, 0, 10, -7, 3, 8, -1, 4, -6, 9, -3, 2]);