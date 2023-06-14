// bai 211: Đếm số hoàn thiện trong mảng

function question1(array) {
    if (array.length === 0) {
        return null;
    }
    function calculator(number) {
        let sum = 0;
        for (let  i = 1; i < number; i++) {
            if (number % i === 0) {
                sum += i;
            }
        }
        return sum === number;
    }
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (calculator(array[i])) {
            count++;
        }
    }
    return count;
}
console.log('cau 211: so hoan thien trong mang la:', question1([6, 28, 12, 496, 8, 15]));

// bai 212: Đếm số lượng giá trị lớn nhất có trong mảng

function question2(array) {
    if (array.length === 0) {
        return 0;
    }
    let count = 1;
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            count = 1;
        }
        else if (array[i] === max) {
            count++;
        }
    return count;
    }
}

console.log('cau 212: so luong gia tri lon nhat la:', question2([6, 28, 592, 12, 496, 8, 15]));

// bai 213: Hãy xác định số lượng phần tử kề nhau mà cả 2 đều chẵn

function question3(array) {
    if (array.length < 2) {
        return 0;
    }
    let count = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] % 2 === 0 && array[i - 1] % 2 === 0 || array[i] % 2 === 0 && array[i + 1] % 2 === 0) {
            count++;
        }
    }
    return count;
}

console.log('cau 213: so luong phan tu lien nhau ma ca 2 deu chan la:', question3([6, 28, 592, 12, 496, 8, 15]));

// bai 214: Hãy xác định số lượng phần tử kề nhau mà cả 2 trái dấu

function question4(array) {
    if (array.length < 2) {
        return 0;
    }
    let count = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > 0 && array[i - 1] < 0 || array[i] < 0 && array[i + 1] > 0) {
            count++;
        }
    }
    return count;
}

console.log('cau 214: so luong phan tu lien nhau ma ca 2 trai dau la:', question4([6, 28, -592, 12, 496, -8, 15]));

// bai 215: Hãy xác định số lượng phần tử kề nhau mà số đứng sau cùng dấu số đứng trước và có giá trị tuyệt đối lớn hơn

function question5(array) {
    if (array.length < 2) {
        return 2;
    }
    let count = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if ((array[i] > 0 && array[i + 1] > 0 && array[i] < Math.abs(array[i + 1])) ||
            (array[i] < 0 && array[i + 1] < 0 && array[i] < Math.abs(array[i + 1]))) {
            count++;
        }
    }
    return count;
}

console.log('cau 215: so luong phan tu lien ke ma so dung sau cung dau voi so dung truoc:', question5([6, 9, -28, -592, 12, 496, -8, 15]));

// bai 216: Đếm số lượng các giá trị phân biệt có trong mảng

function question6(array) {
    if (array.length === 0) {
        return null;
    }
    let distinctValues = new Set(array);
    return distinctValues.size;
}
console.log('cau 216: Số lượng các giá trị phân biệt trong mảng là:', question6([1, 2, 3, 2, 4, 1, 5, 3, 6]));

// bai 217: Liệt kê tần suất xuất hiện các giá trị trong mảng (mỗi giá trị liệt kê 1 lần)

function question7(array) {
    let frequencyMap = new Map();
    for (let i = 0; i < array.length; i++) {
        let value = array[i];
        if (frequencyMap.has(value)) {
            frequencyMap.set(value, frequencyMap.get(value) + 1);
        }
        else {
            frequencyMap.set(value, 1);
        }
    }
    frequencyMap.forEach((count, value) => {
        console.log(`cau 217: Giá trị ${value} xuất hiện ${count} lần`);
    });

}
let array = [1, 2, 3, 2, 4, 1, 3, 5, 1];
question7(array);

// bai 218: Hãy liệt kê các giá trị xuất hiện trong mảng 1 chiều các số nguyên đúng 1 lần

function question8(array) {
    if (array.length === 0) {
        return null;
    }
    let uniqueSet = new Set();   // tao ra bien luu cac gia tri ko trung lap
    let duplicateSet = new Set();  // tao ra bien luu tru cac gia tri ko trung lap

    for (let i = 0; i < array.length; i++) {
        let value = array[i]
        if (uniqueSet.has(value)) {
            duplicateSet.add(value);
        }
        else {
            uniqueSet.add(value);
        }
    }
    let arr = []
    uniqueSet.forEach((value) => {
        if (duplicateSet.has(value)) {
            arr.push(value)
        }
    });
    return arr;
}

console.log('cau 218: cac gia tri xuat hien 1 lan trong mang la:',question8([1, 2, 3, 2, 4, 1, 3, 5, 1]));

// bai 219: Hãy liệt kê các giá trị xuất hiện trong dãy quá 1 lần. Lưu ý: mỗi giá trị liệt kê 1 lần

function question9(array) {
    if (array.length === 0) {
        return null;
    }
    let arr = [];
    let frequencyMap = new Map();  // luu tru tan suat xuat hien cua cac gia tri

    for (let i = 0; i < array.length; i++) {
        let value = array[i];
        if (frequencyMap.has(value)) {
            frequencyMap.set(value, frequencyMap.get(value) + 1)
        }
        else {
            frequencyMap.set(value, 1);
        }
    }
    frequencyMap.forEach((count, value) => {
        if (count > 1) {
            arr.push(value);
        }
    });
    return arr;
}

console.log('cau 218: cac gia tri xuat hien 1 lan trong mang la:',question9([1, 2, 3, 4, 1, 3, 5, 1]));