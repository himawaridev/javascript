// bai 231: Kiểm tra mảng thỏa tính chất: mảng không có số hoàn thiện lớn hơn 256. Có trả về 1, không có trả về 0

function question1(array) {
    function calculator(number) {
        let sum = 0;
        for ( let i = 0; i < number; i++) {
            if (number % i === 0) {     
                sum += i;
            }
        }
        return sum === number;
    }
    if (array.length === 0) {
        return 0;
    }
    for (let i = 0; i < array.length; i++) {
        if (calculator(array[i]) && array[i] > 256) {
            return 1;
        }
    }
    return 0;
}

console.log('cau 231: Mang co so nguyen to la:', question1([2, 3, 4, 5, 0, 0, 5, 6, 7, 8, 8, 9]));

// bai 232: Kiểm tra mảng có đối xứng không? Có trả về 1, không có trả về 0

function question2(array) {
    if (array.length === 0) {
        return 0;
    }
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        if (array[left] !== array[right]) {
            return 0;
        }
        left++;
        right--;
    }

    return 1;
}

console.log('cau 232: mang doi xung la:', question2([1, 2, 3, 4, 3, 2, 1]));

// bai 233: Kiểm tra mảng có toàn số chẵn không? Có trả về 1, không có trả về 0

function question3(array) {
    if (array.length === 0) {
        return 0;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] %  2 !== 0) {
            return 0;
        }
    }
    return 1;

}

console.log('cau 233: mang toan so chan la:', question3([1, 2, 3, 4, 3, 2, 1]));


// bai 234: Ta định nghĩa 1 mảng có tính chất lẻ, khi tổng của 2 phần tử liên tiếp luôn là lẻ. Kiểm tra mảng có tính chất lẻ hay không

function question4(array) {
    if (array.length === 0) {
        return 0;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0 &&  array[i + 1] % 2 !== 0 || array[i] % 2 !== 0 &&  array[i - 1] % 2 !== 0) {
            return `le`;
        }
    }
    return 0;
}

console.log('cau 234: mang co tinh chat: ', question4([1, 2, 3, 4, 3, 2, 1]));


// bai 235: Kiểm tra mảng có tăng dần hay không

function question5(array) {
    if (array.length === 0) {
        return 0;
    }
    for (let i = 1; i < array.length; i++) {
        if (array[i] <= array[i - 1]) {
            return `0`;
        }
    }
    return `tang dan`;
}

console.log('cau 235: mang: ', question5([1, 2, 3, 4]));


// bai 236: Kiểm tra mảng có giảm dần hay không

function question6(array) {
    if (array.length === 0) {
        return 0;
    }
    for (let i = 1; i < array.length; i++) {
        if (array[i] >= array[i - 1]) {
            return `0`;
        }
    }
    return `giam dan`;
}

console.log('cau 236: mang: ', question6([4, 3, 2, 1]));


// bai 237: Hảy cho biết các phần tử trong mảng có lập thành cấp số cộng hay không? Nếu có chỉ ra công sai d

function question7(array) {
    if (array.length < 3) {
        return false;
    }
    let d = array[1] - array[0];    // tinh cong sai:  d an = a1 + (n-1)d
    for ( let i = 1; i < array.length; i++) {
        if (array[i] - array[i - 1] !== d) {
            return false;    
        }
    }
    return d;
}

console.log('cau 237: cong sai d la: ', question7([2, 4, 6, 8, 10]));


// bai 238: Hãy cho biết các phần tử trong mảng có bằng nhau không

function question8(array) {
    if (array.length === 0)  {
        return 0;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[0]) {
            return `khong bang nhau`;
        }
    }
    return `bang nhau`;
}

console.log('cau 238: cac phan tu trong mang: ', question8([2, 4, 6, 8, 10]));


// bai 239: Ta định nghĩa 1 mảng được gọi là dạng song, khi phần tử có trị số I lớn hơn hoặc nhỏ hơn 2 phần tử xung quanh. 
// Hãy viết hàm kiểm tra mảng có dạng sóng không


function question9(array) {
    if (array.length < 3) {
        return null;
    }
    for (let i = 1; i < array.length-1; i++) {
        if (array[i] > array[i - 1] && array[i] > array[i - 1] || array[i] < array[i - 1] && array[i] < array[i - 1]) {
            return `co dang song`;
        }
    }
    return `khong co dang song`;
}

console.log('cau 239: cac phan tu trong mang: ', question9([2, 4, 6, 8, 10]));


// bai 240: Hãy cho biết tất cả các phần tử trong mảng a có nằm trong mảng b không

function question10(arrayA, arrayB) {
    if (arrayA.length === 0) {
        return `mang A rong`;
    }
    if (arrayB === 0) {
        return `mang B rong`;
    }
    for (let i = 0; i < arrayA.length; i++) {
        if (!arrayB.includes(arrayA[i])) {
            return `khong nam trong mang B`;
        }
    }
    return `nam trong mang B`;    
}

console.log('cau 240: cac phan tu: ', question10([1, 2, 3], [1, 2, 3, 4, 5]));