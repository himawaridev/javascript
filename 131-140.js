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
console.log('cau 131: vi tri gia tri duong nho nhat la:', question1([7.5, 3.4, 5.6, 7.8, 9.0, 10.1, 11.2, 12.3, 0.5, 13.4]));



// bai 132: Viết hàm tìm số chẵn đầu tiên trong mảng các số nguyên. Nếu mảng không có giá trị chẵn thì trả về  -1

function question2(array) {
    if (array.length === 0) {
        return -1;
    }
    // let firstValue = Infinity;
    let arr = []
    for (let i = 0; i <= array.length; i++) {
        if (array[i] % 2 === 0) {
            return array[i];
        }
    }
    return -1;
}
console.log('cau 132: so chan dau tien trong mang la:', question2([1, 8, 3, 5, 2, 7, 9]));




// bai 133: Tìm số nguyên tố đầu tiên trong mảng 1 chiều các số nguyên. Nếu mảng không có số nguyên tố thì trả về  – 1