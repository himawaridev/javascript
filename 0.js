function findRange(array) {
    if (array.length === 0) {
        return null;
    }
    
    let min = array[0];
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
    }
    
    return [min, max];
}

// Ví dụ sử dụng
let numbers = [1.5, -11, 2.7, -3.2, 4.9, -5.1, 6.4, 7.2, -8.3, 9.6, 50.0];

let range = findRange(numbers);
console.log('Bài 157: Đoạn chứa tất cả các giá trị trong mảng:', range);
