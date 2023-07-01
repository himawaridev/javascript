// bai 261: Xóa tất cả các số chẵn trong mảng

function question1(array) {
    if (array.length === 0) {
        return [];
    }
    let newArray = array.filter((value) => value < 0);
    return newArray
}

console.log('cau 261: sap sep so am va so duong la:  ', question1([-2, 5, -1, 3, -4, 7, 0]));


// bai 262: Xóa tất cả các số chính phương trong mảng

function question2(array) {
    if (array.length === 0) {
        return [];
    }
    function calculator(number) {
        return Math.sqrt(number) % 1 === 0;
    }
    let newArray = array.filter((value) => !calculator(value));
    return newArray

}

console.log('cau 262: xoa cac so chinh phuong  ', question2([-2, 5, -1, 9, 16, 3, -4, 7, 0]));


// bai 263: Xóa tất cả các phần tử trùng với x

function question3(array, x) {
    if (array.length === 0) {
        return [];
    }
    let newArray = array.filter((value) => x !== value);
    return newArray;
}

console.log('cau 263: xoa phan tu trung voi x  ', question3([-2, 5, -1, 9, 16, 3, -4, 7, 0], 3));

// bai 264: Xóa tất cả các số nguyên tố trong mảng

function question4(array) {
    if (array.length === 0) {
        return [];
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
    let newArray = array.filter((value) => !calculator(value));
    return newArray;
}

console.log('cau 264: xoa cac so nguyen to:  ', question4([1, 7, 2, 3, 4, 5]));

// bai 265: Xóa tất cả các phần tử trùng nhau trong mảng và chỉ giữ lại duy nhất 1 phần tử

function question5(array) {
    if (array.length === 0) {
        return [];
    }
    let newArray = Array.from(new Set(array));
    return newArray;
}

console.log('cau 265: xoa cac phan tu trung:  ', question5([1, 2, 3, 2, 4, 4, 5]));

// bai 266: Xóa tất cả các phần tử xuất hiện nhiều hơn 1 lần trong mảng

function question6(array) {
    if (array.length === 0) {
        return [];
    }
    let newArray = array.filter((value, index) => {
        return array.indexOf(value) === index;
    });
    return newArray
}

console.log('cau 266: xoa cac phan tu trung:  ', question6([1, 2, 3, 2, 4, 4, 5]));

// bai 267: Hãy đưa số 1 về đầu mảng

function question7(array) {
    if (array.length === 0) {
        return [];
    }
    let number = array.indexOf(1); // tim vi tri cua 1
    if (number > -1) {   // kiem tra xem 1 co ton tai ko
        array.splice(number, 1);    // xoa di so 1 tai vi tri hien tai
        array.unshift(1);    // them so 1 vao dau mang
    }
    return array;
}

console.log('cau 267: dua so 1 ve dau mang:  ', question7([10, 2, 3, 1, 2, 4, 4, 5]));


// bai 268: Hãy đưa chẵn về đầu, lẻ về cuối, phần tử 0 nằm giữa mảng

function question8(array) {
    if (array.length === 0) {
        return [];
    }
    let even = [];
    let zero = [];
    let odd = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            zero.push(array[i]);
        }
        else if (array[i] % 2 === 0) {
            even.push(array[i]);
        }
        else {
            odd.push(array[i]);
        }
    }
    return even.concat(zero, odd);
}

console.log('cau 268: dua chan ve dau 0 o giua le o cuoi:  ', question8([1, 2, 3, 4, 0, 5, 6, 0, 7, 8, 9]));


// bai 269: Đưa các số chia hết cho 3 về đầu mảng

function question9(array) {
    if (array.length === 0) {
        return [];
    }
    let div = [];
    let other = [];
    for (let i = 0; i< array.length; i++) {
        if (array[i] % 3 === 0) {
            div.push(array[i]);
        }
        else {
            other.push(array[i]);
        }
    }
    return div.concat(other);
}

console.log('cau 269: dua so chia het cho 3 ve dau mang:  ', question9([1, 2, 3, 4, 0, 5, 6, 0, 7, 8, 9]));


// bai 270: Đảo ngược mảng ban đầu

function question10(array) {
    if (array.length === 0) {
        return [];
    }
    return array.reverse();
}

console.log('cau 270: dao nguoc 1 mang  ', question10([1, 2, 3, 4, 0, 5, 6, 0, 7, 8, 9]));