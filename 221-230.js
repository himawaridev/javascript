// bai 221: Cho 2 mảng a, b. Đếm số lượng giá trị chỉ xuất hiện 1 trong 2 mảng

function question1(array1, array2) {
    if (array1.length === 0 && array2.length === 0) {
        return null;
    }
    else if (array1.length === 0 && array2.length > 0) {
        return array2;
    }
    else if (array2.length === 0 && array1.length > 0) {
        return array1;
    }
    let frequencyMap = new Set(array1);
    array2.forEach((value) => {
        if (frequencyMap.has(value)) {
            frequencyMap.delete(value);
        }
        else {
            frequencyMap.add(value);
        }
    });
    return frequencyMap.size;
}
console.log('cau 221: cac gia tri xuat hien qua 1 lan trong hai mang la:',question1([1, 2, 3, 4, 5],[3, 4, 5, 6, 7]));

// bai 222: Cho 2 mảng a, b. Liệt kê các giá trị chỉ xuất hiện 1 trong 2 mảng

function question2(array1, array2) {
    let frequencyMap = new Set();
    if (array1.length === 0 && array2.length === 0) {
        return null;
    }
    else if (array1.length === 0) {
        return array2;
    }
    else if (array2.length === 0) {
        return array1;
    }
    // them cac gia tri tu array1 vao frequencyMap
    for (let value of array1) {
        if (!array2.includes(value)) 
        frequencyMap.add(value);
    }
    // them cac gia tri tu array1 vao frequencyMap
    for (let value of array2) {
        if (!array1.includes(value)) {
            frequencyMap.add(value);
        }
    }
    return Array.from(frequencyMap);
}
console.log('cau 221: cac gia tri xuat hien qua 1 lan trong mang la:',question2([1, 2, 3, 4, 5],[3, 4, 5, 6, 7]));

// bai 223: Cho 2 mảng a, b. Hãy cho biết số lần xuất hiện của mảng a trong mảng b