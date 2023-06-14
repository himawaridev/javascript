// bai 181: Cho mảng 1 chiều các số nguyên. Hãy viết hàm liệt kê các giá trị trong mảng có dạng 3^k. Nếu mảng không có giá trị đó thì trả về 0

function question1(array1) {
    if(array1.length === 0) {
        return null;
    }
    let arr = [];
    let exponent;
    for (let i = 0; i < array1.length; i++) {
        let number = array1[i];
        exponent = Math.log(number) / Math.log(3);
        if (exponent === Math.floor(exponent)) {
            arr.push(number);
        }
    }
    return arr;
}
let array1 = [1, 3, 9, 5, 27, 8, 6];
let result1 = question1(array1);
console.log("cau 181: Các giá trị có dạng 3^k là:", result1);

// bai 182: Cho mảng 1 chiều các số nguyên có nhiều hơn 2 giá trị. Hãy viết hàm liệt kê các cặp giá trị gần nhau nhất

function question2(array2) {
    if (array2,length < 2) {
        return null;
    }
}

// bai 183: Liệt kê các số âm trong mảng 1 chiều các số nguyên

function question3(array3) {
    if(array3.length === 0) {
        return null;
    }
    let arr = [];
    for (let i = 0; i < array3.length; i++) {
        if (array3[i] < 0) {
            arr.push(array3[i]);
        }
    }
    return arr;
}

let array3 = [1, 3, -9, 5, -27, 8, 6];
let result3 = question3(array3);
console.log("cau 383: Các giá trị có dạng 3^k là:", result3);

// bai 184: Hãy liệt kê các giá trị trong mảng các số nguyên có chữ số đầu tiên là chữ số lẻ

function question4(array4) {
    if(array4.length === 0) {
        return null;
    }
    let arr = [];
    for (let i = 0; i < array4.length;i++) {
        let numberString = Math.abs(array4[i]).toString();
        if (parseInt(numberString[0]) % 2 !== 0) {
            arr.push(array4[i]);
        }
    }
    return arr;
}
let array4 = [123, 456, 2789, 1357, 3791, 2468];
let result4 = question4(array4);
console.log("cau 180: cac gia tri co so dau tien la so chan la:", result4);

// bai 185: Hãy liệt kê các vị trí mà giá trị tại đó là giá trị lớn nhất trong mảng 1 chiều các số thực

function question5(array5) {
    if(array5.length === 0) {
        return null;
    }
    let arr = [];
    let minValue = -Infinity;

    for (let i = 0; i < array5.length; i++) {
        if (array5[i] > minValue) {
            minValue = array5[i];
        }
    }
    for (let i = 0; i < array5.length; i++) {
        if (array5[i] === minValue) {
            arr.push(i)
        }
    }
    return arr;
}
let array5 = [123, 456, 2789, 1357, 3791, 2468];
let result5 = question5(array5);
console.log("cau 185: cac vi tri co gia tri lon nhat la:", result5);

// bai 186: Hãy liệt kê các vị trí mà giá trị tại đó là số nguyên tố trong mảng 1 chiều các số nguyên

function question6(array6) {
    if (array6.length === 0) {
        return null;
    }
    function calculator(number) {
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
    let arr = [];
    for (let i = 0; i < array6.length; i++) {
        if (calculator(array6[i])) {
            arr.push(i);
        }
    }
    return arr;
}
let array6 = [1, 4, 7, 9, 12, 17, 21, 23, 29, 30];
let result6 = question6(array6);
console.log("cau 186: cac vi tri la so nguyen to trong mang la:", result6);

// bai 187: Tính tổng các phần tử trong mảng

function question7(array7) {
    if (array7.length === 0) {
        return null;
    }
    let sum = 0;
    let arr = [];
    for (let i = 0; i < array7.length; i++) {
        sum += array7[i];
    }
    return sum;
}

console.log('cau 187: tong cac phan tu trong mang la:',question7([1, 4, 7, 9, 12, 17, 21, 23, 29, 30]));

// bai 188: Tính tổng các giá trị dương trong mảng 1 chiều các số thực

function question8(array8) {
    if (array8.length === 0) {
        return null;
    }
    let sum = 0;
    for (let i = 0;i < array8.length; i++) {
        if (array8[i] >= 0) {
            sum += array8[i];
        }
    }
    return sum;
}

console.log('cau 188: tong cac gia tri duong trong mang la:',question8([1, 4, -7, 9, -12, 17, 21, 23, -29, 30]));

// bai 189: Tính tổng các giá trị có chữ số đầu tiên là chữ số lẻ trong mảng 1 chiều các số nguyên

function question9(array9) {
    if (array9.length === 0) {
        return null;
    }
    let sum = 0;
    for (let i = 0; i < array9.length; i++) {
        let numberString = Math.abs(array9[i]).toString();
        if (parseInt(numberString[0]) % 2 !== 0) {
            sum += array9[i];
        }
    }
    return sum;
}
console.log('cau 189: tong cac gia tri co so dau tien la so le la',question9([1, 4, -7, 9, -12, 17, 21, 23, -29, 30]));

// bai 190: Tinh tổng các chữ số có chữ số hàng chục là 5 trong mảng 1 chiều các số nguyên

function question10(array10) {
    if (array10.length === 0) {
        return null;
    }
    let sum = 0;
    for (let i = 0; i < array10.length; i++) {
        if (Math.floor(Math.abs(array10[i] / 10) % 10) === 5) {
            sum += array10[i];
        }
    }
    return sum;
}

console.log('cau 190: tong cac gia tri co so dau tien la so le la',question10([15, 25, 35, 45, 55, 157, 65]));