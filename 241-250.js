// bai 241: Hãy đếm giá trị trong mảng thỏa: lớn hơn tất cả các giá trị đứng đằng trước nó

function question1(array) {
    if (array.length === 0) {
        return null;
    }
    let count = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) {
            count++;
        }
    }
    return count;
}

console.log('cau 241: so gia tri trong mang thoa man la: ', question1([2, 1, 4, 6, 8, 10]));



// bai 242: Sắp xếp mảng tăng dần

function question2(array) {
    if (array.length === 0) {
        return [];
    }
    return array.sort((a, b) => a - b);
}

console.log('cau 242: so gia tri trong mang thoa man la: ', question2([2, 1, 4, 6, 5, 8, 10]));


// bai 243: Sắp xếp mảng giảm dần

function question3(array) {
    if (array.length === 0) {
        return [];
    }
    return array.sort((a, b) => b - a);
}
  
console.log('cau 243: Mảng sau khi sắp xếp giảm dần:', question3([2, 1, 4, 6, 5, 8, 10]));


// bai 244: Sắp xếp lẻ tăng dần nhưng giá trị khác giữ nguyên vị trí

function question4(array) {
    if (array.length === 0) {
        return [];
    }
    let oddArray = [];   // luu tru so le
    let oddIndices = [];    // luu tru so le trong mang goc
    for (let i = 0; i< array.length; i++) {
        if (array[i] % 2 !== 0) {
            oddArray.push(array[i]);   
            oddIndices.push(i);
        }
    }
    oddArray.sort((a, b) => a - b);   // sap sep so le tang dan
    for (let i = 0; i < oddIndices.length; i++) {
        array[oddIndices[i]] = oddArray[i];
    }
    return array;
}
console.log('cau 244: mang sau khi sap xep le tang dan', question4([2, 5, 4, 6, 1, 8, 10]));


// bai 245: Sắp xếp số nguyên tố tăng dần nhưng giá trị khác giữ nguyên vị trí

function question5(array) {
    if (array.length === 0) {
        return 0;
    }
    function calculator(number) {
        if (number < 2) {
            return false;
        }
        for (let i = 0; i < Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }

    let primeArray = [];    // tao mang luu tru so nguyen to
    let otherArray = [];    // tao mang luu tru nhung so khac
    for (let i = 0; i < array.length; i++) {
        if (calculator(array[i])) {
            primeArray.push(array[i]);    // nau la so nguyen to se dua vao primeArray
        }
        else {
            otherArray.push(array[i]);    // cac so con lai dua vao otherArray
        }
    }

    // sap sep cac so nguyen to tang dan cua primeArray
    primeArray.sort((a, b) => a - b);
    let resultArray = [];

    // thay the cac gia tri trong mang luc dau bnag cac gia tri nguyen to va gia tri khac
    let primeIndex = 0;    
    let otherIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (calculator(array[i])) {
            resultArray.push(primeArray[primeIndex]);  // dua gia tri cua primeArray[] vao resultArray
            primeIndex++;
        } else {
            resultArray.push(otherArray[otherIndex]);  // dua gia tri cua otherArray[] vao resultArray
            otherIndex++;
        }
    }
    return resultArray;
}

console.log('cau 245: ', question5([2, 5, 4, 6, 1, 8, 10]));


// bai 246: Sắp xếp số hoàn thiện giảm dần nhưng giá trị khác giữ nguyên vị trí

function question6(array) {
    if (array.length === 0) {
        return null;
    }
    // tim so nguyen to bang ham calculator
    function calculator(number) {
        let sum = 0;
        for (let i = 1; i < number; i++) {
            if (number % i === 0) {
                sum += i;
            }
        }
        return sum === number;
    }
    let perfectArray = [];
    let otherArray = [];
    for (let i = 0; i < array.length; i++) {
        if (calculator(array[i])) {
            perfectArray.push(array[i]);
        }
        else {
            otherArray.push(array[i]);
        }
    }
    perfectArray.sort((a, b) => b - a);
    let resultArray = [];
    // thay the cac gia tri trong mang
    let perfectIndex = 0;
    let otherIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (calculator(array[i])) {
            resultArray.push(perfectArray[perfectIndex]);
            perfectIndex++;
        }
        else {
            resultArray.push(otherArray[otherIndex]);
            otherIndex++;
        }
    }
    return resultArray;
}

console.log('cau 246: ', question6([2, 5, 4, 6, 1, 8, 10]));


// bai 247: Cho 2 mảng a, b. Hãy cho biết mảng b có phải là hoán vị của mảng a không

function question7(arrayA, arrayB) {
    // kiem tra xem hai chuoi co giong nhau khong. Neu khong se tra ve false.
    if (arrayA.length !== arrayB.length) {
        return false;
    }
    // sap sep hai mang
    arrayA.sort();
    arrayB.sort();
    for (let i = 0; i < arrayA.length; i++) {
        if (arrayA.length !== arrayB.length) {
            return false;
        }
    }
    return true;
}

console.log('cau 247: hai mang a va b hoan vi: ', question7([1, 2, 3, 4],[4, 3, 2, 1]));

// bai 248: Sắp xếp số dương tăng dần, các số âm giữ nguyên vị trí

function question8(array) {
    if (array.length === 0) {
        return [];
    }
    let minus = [];
    let positive = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            minus.push(array[i]);
        }
        else {
            positive.push(array[i]);
        }
    }
    minus.sort((a, b) => a - b);
    let newArray = [];
    let minusNew = 0;
    let positiveNew = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            newArray.push(minus[minusNew])
            minusNew++;
        }
        else {
            newArray.push(positive[positiveNew]);
            positiveNew++
        }
    }
    return newArray;
}

console.log('cau 248: sap sep so am va so duong la:  ', question8([-2, 5, -1, 3, -4, 7, 0]));

// bai 249: Sắp xếp chẵn, lẻ tăng dần nhưng vị trí tương đối giữa các số không thay đổi

function question9(array) {
    if (array.length === 0) {
        return false;
    }
    let odd = [];
    let even = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            even.push(array[i]);
        }
        else {
            odd.push(array[i]);
        }
    }
    // sap xep mang chan va le
    even.sort((a, b) => a - b);
    odd.sort((a, b) => a - b);
    let newArray = [];
    let oddNew = 0;
    let evenNew = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            newArray.push(even[evenNew]);
            evenNew++;
        }
        else {
            newArray.push(odd[oddNew]);
            oddNew++;
        }
    }
    return newArray;
}

console.log('cau 249: sap xep chan le la: ', question9([2, 5, 4, 6, 1, 8, 10]));

// bai 250: Sắp xếp số dương tăng dần, âm giảm dần. Vị trí tương đối không thay đổi

function question10(array) {
    if (array.length === 0) {
        return [];
    }
    let positive = [];
    let minus = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            positive.push(array[i]);
        }
        else {
            minus.push(array[i]);
        }
    }
    // sap sep so duong tang dan va am giam dan
    positive.sort((a, b) => a - b);
    minus.sort((a, b) => b - a);

    let newArray = [];
    let positiveNew = 0;
    let minusNew = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            newArray.push(positive[positiveNew]);
            positiveNew++;
        }
        else {
            newArray.push(minus[minusNew]);
            minusNew++;
        }
    }
    return newArray;
}

console.log('cau 250: sap sep so am va so duong la:  ', question10([-2, 5, -1, 3, -4, 7, 0]));