// bai 201: Tính trung bình nhân các giá trị dương có trong mảng 1 chiều các số thực

function question1(array) {
    let multiplication = 1;
    let count = 0;
    if (array.length === 0) {
        return null;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            multiplication *= array[i];
            count++;
        }
    }
    return multiplication / count;
}

console.log('cau 201: trung binh nhan cac so duong la:', question1([7.92, -3.14, -5.67, 9.01, -2.87, 6.45, -4.29, 1.58, 8.76, 0.91]));

// bai 202: Tính khoảng các trung bình giữa các giá trị trong mảng

function question2(array) {
    let sum = 0;
    if (array.length === 0) {
        return null;
    }
    for (let i = 1; i < array.length; i++) {
        sum += Math.abs(array[i] - array[i - 1]);
    }
    let averageDistance = sum / (array.length - 1);
    return averageDistance;
}

console.log('cau 202: trung binh nhan cac so duong la:', question2([7.92, -3.14, -5.67, 9.01, -2.87, 6.45, -4.29, 1.58, 8.76, 0.91]));

// bai 203: Đếm số lượng số chẵn trong mảng

function question3(array) {
    if (array.length === 0) {
        return null;
    }
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}

console.log('cau 203: so luong cac so chan la:', question3([27, 7, 43, 8, 3, 9, 4, 20, 13]));

// bai 204:  Đếm số dương chia hết cho 7 trong mảng

function question4(array) {
    if (array.length === 0) {
        return null;
    }
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 7 === 0) {
            count++;
        }
    }
    return count;
}

console.log('cau 204: so duong chia het cho 7 trong mang la:', question4([27, 7, 43, 8, 3, 9, 4, 21, 13]));

// bai 205: Đếm số đối xứng trong mảng

// bai 206: Đếm số lần xuất hiện của giá trị x trong mảng

function question6(array,x) {
    if (array.length === 0) {
        return null;
    }
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === x) {
            count++;
        }
    }
    return count;
}

console.log('cau 205: so lan xuat hien cua gia tri x la:', question6([27, 7, 43, 8, 3, 9, 4, 8,21, 13], 8));

// bai 207: Đếm số lượng giá trị tận cùng bằng 5 trong mảng

function question7(array) {
    if (array.length === 0) {
        return null;
    }
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 10 === 5);
        count++;
    }
    return count;
}

console.log('cau 207: so luong gia tri tan cung bang 5 la:', question7([25, 15, 35, 45, 50, 12, 55]));

// bai 208: Cho biết sự tương quan giữa số lượng chẵn và lẻ trong mảng

function question8(array) {
    if (array.length === 0) {
        return null;
    }
    let oddCount = 0;
    let evenCount = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenCount++;
        }
        else {
            oddCount++;
        }
    }
    if (evenCount > oddCount) {
        return -1;
    }
    else if (evenCount < oddCount) {
        return 1;
    }
    else {
        return 0;
    }
}
console.log('cau 208: su tuong quan so chan va so le la:', question8([27, 7, 8, 43, 8, 3, 9, 4, 21, 13]));

// bai 209: Đếm phần tử lớn hơn hay nhỏ hơn phần tử xung quanh mảng

function question9(array) {
    if (array.length === 0) {
        return null;
    }
    let maxCount = 0;
    let minCount = 0;
    for (let i = 1; i < array.length - 1; i++) {
        if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
            maxCount++;
        }
        else if (array[i] < array[i - 1] && array[i] < array[i + 1]) {
            minCount++;
        }
    }
    return { maxCount, minCount };
}

const array = [5, 3, 8, 4, 2, 9, 1, 6];
const counts = question9(array);
console.log("cau 209: Số phần tử lớn hơn: ", counts.maxCount);
console.log("cau 209: Số phần tử nhỏ hơn: ", counts.minCount);

// cau 210: Đếm số nguyên tố trong mảng

function question10(array) {
    if (array.length === 0) {
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
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if(calculator(array[i])) {
            count++;
        }
    }
    return count;
}

console.log('cau 210: phan tu lon ho nho hon phan tu xung quanh la:', question10([27, 7, 3, 8, 43, 8, 3, 9, 4, 21, 13]));