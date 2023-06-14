// bai 191: Tính tổng các giá trị lớn hơn giá trị đứng liền trước nó trong mảng 1 chiều các số thực 

function question1(array1) {
    let sum = 0;
    if (array1.length === 0) {
        return null;
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] > array1[i - 1]) {
            sum += array1[i];
        }
    }
    return sum;
}

console.log('cau 191: tong cac gia tri lon hon so dung lien truoc la', question1([7.92, 3.14, 5.67, 9.01, 2.87, 6.45, 4.29, 1.58, 8.76, 0.91]));

// bai 192: Tính tổng các giá trị lớn hơn trị tuyệt đối của giá trị đứng liền sau nó trong mảng 1 chiều các số thực 

function question2(array2) {
    let sum = 0;
    if (array2.length === 0) {
        return null;
    }
    for (let i = 0; i < array2.length; i++) {
        if (array2[i] > Math.abs(array2[i + 1])) {
            sum += array2[i];
        }
    }
    return sum;
}

console.log('cau 192: tong cac gia tri lon hon gia tri tuyet doi cua so dung sau la:', question2([7.92, 3.14, 5.67, 9.01, 2.87, 6.45, 4.29, 1.58, 8.76, 0.91]));

// bai 193: Tính tổng các giá trị lớn hơn các giá trị xung quanh trong mảng 1 chiều các số thực

function question3(array3) {
    let sum = 0;
    if (array3.length < 3) {
        return null;
    }
    for (let i = 0; i < array3.length; i++) {
        if (array3[i] > array3[i - 1] && array3[i] > array3[i + 1]) {
            sum += array3[i];
        }
    }
    return sum;
}

console.log('cau 193: tong cac gia tri lon hon cac gia tri xung quanh la:', question3([7.92, 3.14, 5.67, 9.01, 2.87, 6.45, 4.29, 1.58, 8.76, 0.91]));


// bai 194: Tính tổng các phần tử “cực trị” trong mảng. Một phần tử được gọi là cực trị khi nó lớn hơn hoặc nhỏ hơn các phần tử xung quanh nó

function question4(array) {
    let sum = 0;
    if (array.length < 3) {
        return null;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i - 1] && array[i] > array[i + 1] || array[i] < array[i - 1] && array[i] < array[i + 1]) {
            sum += array[i];
        }
    }
    return sum;
}

console.log('cau 194: tong cac gia tri cuc tri la:', question4([7.92, 3.14, 5.67, 9.01, 2.87, 6.45, 4.29, 1.58, 8.76, 0.91]));

// bai 195: Tính tổng các giá trị chính phương trong mảng 1 chiều các số nguyên

function question5(array) {
    let sum = 0;
    if (array.length === 0) {
        return null;
    }
    function calculator(number) {
        let sqrt = Math.sqrt(number);
        return sqrt === Math.floor(sqrt);
    }
    for (let i = 0; i < array.length; i++) {
        if (calculator(array[i])) {
            sum += array[i];
        }
    }
    return sum;
}
console.log('cau 195: tong cac gia tri cua so chinh phuong la:', question5([35, 72, 100, 18, 9, 47, 61, 89, 25, 13, 52, 27, 96]));

// bai 196: Tính tổng các giá trị đối xứng trong mảng các số nguyên

function question6(array) {
    console.log('cau 196: /////////////////////////////////////////');
}
question6(3);

// bai 197: Tính tổng các giá trị có chữ số đầu tiên là chữ số chẵn trong mảng các số nguyên

function question7(array) {
    let sum = 0;
    if (array.length === 0) {
        return null;
    }
    for (let i = 0; i < array.length; i++) {
        let numberString = Math.abs(array[i]).toString();
        if(parseInt(numberString[0]) % 2 === 0) {
            sum += array[i];
        }
    }
    return sum;
}

console.log('cau 197: tong cac gia tri co chu so dau tien la so chan la:', question7([27, 7, 43, 8, 9, 4, 20]));

// bai 198: Tính trung bình cộng các số nguyên tố trong mảng 1 chiều các số nguyên

function question8(array) {
    let sum =  0;
    let count = 0;
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
    for (let i = 0; i < array.length; i++) {
        if (calculator(array[i])) {
            sum += array[i];
            count++;
        }
    }
    if (count === 0) {
        return null;
    }
    return sum / count;
}

console.log('cau 198: trung binh cong cac so nguyen to la:', question8([27, 7, 43, 8, 3, 9, 4, 20, 13]));

// bai 199: Tính trung bình cộng các số dương trong mảng 1 chiều các số thực

function question9(array) {
    let sum = 0;
    let count = 0;
    if (array.length === 0) {
        return null;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum += array[i];
            count++;
        }
    }
    return sum / count;
}

console.log('cau 199: trung binh cong cac so duong la:', question9([7.92, -3.14, -5.67, 9.01, -2.87, 6.45, -4.29, 1.58, 8.76, 0.91]));

// bai 200: Tính trung bình cộng các giá trị lớn hơn giá trị x trong mảng 1 chiều các số thực

function question10(array,x) {
    let sum = 0;
    let count = 0;
    if (array.length === 0) {
        return null;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] > x) {
            sum += array[i];
            count++;
        }
    }
    return sum / count;
}
console.log('cau 200: tong cac gia tri lon hon x la:', question10([7.92, 3.14, 5.67, 9.01, 2.87, 6.45, 4.29, 1.58, 8.76, 0.91], 5));