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
    for (let i = 0; i< array5.length;i++) {
        if(array5[i] === minValue) {
            arr.push(i)
        }
    }
    return arr;
}
let array5 = [123, 456, 2789, 1357, 3791, 2468];
let result5 = question5(array5);
console.log("cau 185: cac vi tri co gia tri lon nhat la:", result5);