// bai 251: Trộn 2 mảng đã tăng thành 1 mảng được sắp xếp tăng

function question1(arrayA, arrayB) {
    if (arrayA.length === 0 && arrayB.length === 0) {
        return [];
    }
    else if (arrayA.length === 0) {
        return arrayB.sort((a, b) => a - b);
    }
    else if (arrayB.length === 0) {
        return arrayA.sort((a, b) => a - b);
    }
    else {
        arrayA.sort((a, b) => a - b);
        arrayB.sort((a, b) => a - b);
        return [...arrayA, ...arrayB].sort((a, b) => a - b);
    }
    
}

console.log('cau 251: tron hai mang tang dan ', question1([1, 5, 9, 2, 3, 4],[4, 3, 13, 7, 2, 1]));


// bai 152: Cho 2 mảng tăng. Hãy trộn thành 1 mảng giảm dần

function question2(arrayA, arrayB) {
    if (arrayA.length === 0 && arrayB.length === 0) {
        return [];
    }
    else if (arrayA.length === 0) {
        return arrayB.sort((a, b) => b - a);
    }
    else if (arrayB.length === 0) {
        return arrayA.sort((a, b) => b - a);
    }
    else {
        arrayA.sort((a, b) => b - a);
        arrayB.sort((a, b) => b - a);
        return [...arrayA, ...arrayB].sort((a, b) => b - a);
    }
}

console.log('cau 252: tron 2 mang giam dan: ', question2([1, 5, 9, 2, 3, 4],[4, 3, 13, 7, 2, 1]));

// bai 253: Thêm 1 phần tử x vào mảng tại vị trí k

function question3(array, x, k) {
    if (array.length === 0) {
        return [];
    }
    array.splice(k, 0, x);
    return array;
}

console.log('cau 253: them 1 phan tu vao vi tri k la: ', question3([1, 2, 3, 4, 5], 10 , 2));


// bai 254: Viết hàm nhập mảng sao cho khi nhập xong thì giá trị trong mảng sắp xếp giảm dần

function question4(array) {
    if (array.length === 0) {
        return [];
    }
    array.sort((a, b) => b - a);
    return array;
}

console.log('cau 254: sap sep mang:  ', question4([-2, 5, -1, 3, -4, 7, 0]));


// bai 255: Hãy tạo mảng b từ mảng a các giá trị 0, 1 để mảng có tính chẵn lẻ

function question5(arrayA) {
    if (arrayA.length === 0) {
        return [];
    }
    let arrayB = [];
    for (let i = 0; i < arrayA.length; i++) {
        if (arrayA[i] % 2 === 0) {
            arrayB.push(0);
        }
        else {
            arrayB.push(1);
        }
    }
    return arrayB;
}
console.log('cau 255: sap sep mang:  ', question5([1, 7, 2, 3, 4, 5]));


// bai 256: Thêm x vào trong mảng tăng nhưng vẫn giữ nguyên tính tăng của mảng

// bai 257: Nhập mảng sau khi nhập xong đã tự sắp xếp tăng dần

function question7(array) {
    if (array.length === 0) {
        return [];
    }
    array.sort((a, b) => a - b);
    return array;
}

console.log('cau 257: sap sep mang:  ', question7([1, 7, 2, 3, 4, 5]));


// bai 258: Xóa các phần tử có chỉ số k trong mảng

function question8(array, k) {
    if (array.length === 0) {
        return [];
    }
    if (k >= 0 && k < array.length) {
        array.splice(k, 1);
    }
    return array;
}

console.log('cau 258: xoa phan tu vi tri k  ', question8([1, 7, 2, 3, 4, 5], 3));


// bai 259: Hãy xóa tất cả số lớn nhất trong mảng các số thực

function question9(array, k)  {
    if (array.length === 0) {
        return [];
    }
    array.sort((a, b) => b - a);
    if (k >= 0 && k < array.length) {
        array.splice(k, 1);
    }
    array.sort((a, b) => a - b);
    return array;
}

console.log('cau 259: xoa so lon nhat trong mang  ', question9([1, 7, 2, 3, 4, 5], 0));


// bai 260: Xóa tất cả các số âm trong mảng

function question10(array) {
    if (array.length === 0) {
        return [];
    }
    let newArray = array.filter((value) => value >= 0);
    return newArray
}

console.log('cau 260: sap sep so am va so duong la:  ', question10([-2, 5, -1, 3, -4, 7, 0]));


