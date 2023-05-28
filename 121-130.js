// bai 121: Viết hàm liệt kê các giá trị chẵn trong mảng 1 chiều các số nguyên


function question1(array) {
    if (array === 0) {
        return null;
    }
    for (let i = 0; i <= array.length; i++) {
        if (array[i] % 2 === 0) {
            console.log('cau 121: ', array[i]);
        }
    }
}
question1([-2, 5, 0, 10, -7, 3, 8, -1, 4, -6, 9, -3, 2]);



// bai 122: Viết hàm liệt kê các vị trí mà giá trị tại đó là giá trị âm trong mảng 1 chiều các số thực

function question2(array) {
    if (array.length === 0) {
        return null;
    }
    let arr = [];
    for (let i = 0; i <= array.length; i++) {
        if (array[i] < 0) {     //  dieu kien so am
            arr.push(i);    // dua gia tri dung vao mang rong da khai bao
        }
    }
    console.log('cau 122: vi tri cua gia tri am la: ', arr);
}
question2([3.14159, -2.71828, 1.61803, -0.57721, 4.66920]);



// bai 123: Viết hàm tìm giá trị lớn nhất trong mảng 1 chiều các số thực

function question3(array) {
    if (array.length === 0) {
        return null;
    }
    let maxValue = 0;
    for (let i = 0; i <= array.length; i++) {
        if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }
    console.log('cau 123: gia tri lon nhat trong mang la:', maxValue);
}
question3([3.14159, -2.71828, 1.61803, -0.57721, 4.66920]);



// bai 124: Viết hàm tìm giá trị dương đầu tiên trong mảng 1 chiều các số thực. Nếu mảng không có giá trị dương thì trả về -1

function question4(array) {
    if (array === 0) {
        return null;
    }
    let arr = [0];
    for (let i = 0; i <= array.length; i++) {
        if (array[i] > 0) {
            arr = array[i];
            break;
        }
    }
    console.log('cau 124: gia tri duong dau tien la: ', arr);
}
question4([-0.57721, 23.14159, -2.71828, 1.61803, 4.66920]);


// bai 125: Tìm số chẵn cuối cùng trong mảng 1 chiều các số nguyên. Nếu mảng không có giá trị chẵn thì trả về -1

function question5(array) {
    if (array.length === 0) {
        return 0;
    }
    let arr = [0];
    for (let i = 0; i <= array.length; i++) {
        if (array[i] % 2 === 0) {
            arr = array[i];
            break;
        }
    }
    console.log('cau 125: gia tri chan cuoi cung la: ', arr);
}
question5([5, 3, 9, 18, 1, 10, 6, 4, 2, 7, 8]);





// bai 126: Tìm 1 vị trí mà giá trị tại vị trí đó là giá trị nhỏ nhất trong mảng 1 chiều các số thực

function question6(array) {
    if (array.length === 0) {
        return null;
    }
    let arr = [0];
    let minValue = 0;
    for (let i = 0; i <= array.length; i++) {
        if (array[i] < arr);
        arr = array[i];
        minValue = i;
    }
    console.log('cau 126: vi tri co gia tri nho nhat la:', minValue);
}
question6([-0.57721, 23.14159, -2.71828, 1.61803, 4.66920]);




// bai 127: Tìm vị trí của giá trị chẵn đầu tiên trong mảng 1 chiều các số nguyên. Nếu mảng không có giá trị chẵn thì sẽ trả về -1

function question7(array) {
    if (array.length === 0) {
        return null;
    }
    for (let i = 0; i <= array.length; i++) {
        if (array[i] % 2 === 0) {
            return i;
        }
    }
    return -1;
}
let arrayQuestion7 = [1, 8, 3, 5, 2, 7, 9];
let location = question7(arrayQuestion7);
console.log("cau 127: Vị trí của giá trị chẵn đầu tiên: " + location);



// bai 128: Tìm vị trí số hoàn thiện cuối cùng trong mảng 1 chiều các số nguyên. Nếu mảng không có số hoàn thiện thì trả về giá trị  -1

// function question8 (array) {
//     if (array.length === 0) {
//         return null;
//     }
//     for
// }




// bai 129: Hãy tìm giá trị dương nhỏ nhất trong mảng 1 chiều các số thực. Nếu mảng không có giá trị dương thì sẽ trả về -1

function question9(array) {
    if (array.length === 0) {
        return -1;
    }
    let minValue = Infinity;
    for (let i = 0; i <= array.length; i++) {
        if (array[i] > 0 && array[i] < minValue) {
            minValue = array[i];
        }
    }
    if (minValue === Infinity) {
        return -1;
    }
    return minValue;
}
console.log('cau 129: gia tri duong nho nhat la:', question9([7.5, 3.4, 5.6, 7.8, 9.0, 10.1, 11.2, 12.3, 0.5, 13.4, 14.5]));




// bai 130: Hãy tìm vị trí giá trị dương nhỏ nhất trong mảng 1 chiều các số thực. Nếu mảng không có giá trị dương thì trả về  -1

function question10(array) {
    if (array.length === 0) {
        return null;
    }
    let minValue = Infinity;
    let arr = -1;
    for (let i = 0; i <= array.length; i++) {
        if (array[i] > 0 && array[i] < minValue) {
            minValue = array[i];
            arr = i;
        }
    }
    return arr;
}
console.log('cau 130: vi tri gia tri duong nho nhat la:',question10([7.5, 3.4, 5.6, 7.8, 9.0, 10.1, 11.2, 12.3, 0.5, 13.4]));
