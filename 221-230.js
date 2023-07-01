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
console.log('cau 222: cac gia tri xuat hien qua 1 lan trong mang la:',question2([1, 2, 3, 4, 5],[3, 4, 5, 6, 7]));

// bai 223: Cho 2 mảng a, b. Hãy cho biết số lần xuất hiện của mảng a trong mảng b

function question3(array1, array2) {
    let count = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            count++;
        }
    }
    return count;
}
console.log("cau 223: so lan xuat hien cua mang A trong mang B la:", question3([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

// bai 224 + 225 Hãy liệt kê các giá trị có số lần xuất hiện nhiều nhất trong mảng

function question45(array) {
    if (array.length === 0) {
        return null;
    }
    let frequencyMap = new Map();   // khai bao Map de luu tru cac phan tu

    // dem so lan xuat hien cac gia tri trong mang
    array.forEach((value) => {
        if (frequencyMap.has(value)) {
            frequencyMap.set(value, frequencyMap.get(value) + 1) 
        }
        else {
            frequencyMap.set(value, 1);
        }
    });

    // tim so xuat hien lon nhat
    let maxFrequency = 0;
    frequencyMap.forEach((frequency) => {
        if (frequency > maxFrequency) {
            maxFrequency = frequency;
        }
    });

    // loc cac so co so lan xuat hien bang so lan xuat hien lon nhat
    let mostValue = [];
    frequencyMap.forEach((frequency, value) => {
        if (frequency === maxFrequency) {
            mostValue.push(value);
        }
    })
    return mostValue;
}

console.log('cau 224 + 225: cac gia tri co tan suat xuat hien nhieu nhat trong mang la:', question45([1, 2, 3, 2, 4, 1, 3, 5, 1]));

// bai 226: Hãy đếm số lượng số nguyên tố phân biệt trong mảng

function question6(array) {
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
    if (array.length === 0) {
            return null;
    }
    let uniqueSet = new Set();
        array.forEach((number) => {
            if (calculator(number)) {
                uniqueSet.add(number);
            }
        });
        return uniqueSet.size;
    }
    console.log('cau 226: so luong so nguyen to phan biet trong mang la:', question6([2, 3, 4, 5, 5, 6, 7, 8, 8, 9]));

// bai 227: Kiểm tra mảng có giá trị 0 hay không? Có trả về 1, không có trả về 0

function question7(array) {
    if (array.length === 0) {
        return null;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            return 1;
        }
    }
    return 0;
}
console.log('cau 227: mang co gia tri 0 la:', question7([2, 3, 4, 5, 0, 5, 6, 7, 8, 8, 9]));

// bai 228:  Kiểm tra mảng có 2 giá trị 0 liên tiếp hay không? Có trả về 1, không có trả về 0

function question8(array) {
    if (array.length === 0) {
        return 0;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0 && array[i + 1] === 0 || array[i] ===0 && array[i - 1] === 0) {
            return 1;
        }
    }
    return 0;
}

console.log('cau 228: mang co gia tri 0 lien tiep la:', question8([2, 3, 4, 5, 0, 0, 5, 6, 7, 8, 8, 9]));

// bai 229: Kiểm tra mảng có số chẵn hay không? Có trả về 1, không có trả về 0

function question9(array) {
    if (array.length === 0) {
        return 0;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            return 1;
        }
        return 0;
    }
}

console.log('cau 229: Mang co so chan la:', question9([2, 3, 4, 5, 0, 0, 5, 6, 7, 8, 8, 9]));

// bai 230: Kiểm tra mảng có số nguyên tố hay không? Có trả về 1, không có trả về 0

function question10(array) {
    if (array.length === 0) {
        return 0;
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
            return 1;
        }
    }
    return 0;
}

console.log('cau 230: Mang co so nguyen to la:', question10([2, 3, 4, 5, 0, 0, 5, 6, 7, 8, 8, 9]));
