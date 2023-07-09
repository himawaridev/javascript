// bai 281: Liệt kê tất cả các mảng con

function question1(array) {
    if (array.length === 0) {
        return [];
    }
    let newArray = []; 
    for (let start = 0; start < array.length; start++) {
        for (let end = start + 1; end <= array.length; end++) {
            let subArray = array.slice(start, end)
            newArray.push(subArray);
        }
    }
    return newArray
}

console.log('cau 281: change value min-max  ', question1([1, 2, 3]));


// bai 282: Liệt kê mảng con có độ dài lớn hơn 2 phần tử                                                                

function question2(array) {
    if (array.length === 0) {
        return [];
    }
    let newArray = []; 
    for (let start = 0; start < array.length; start++) {
        for (let end = start + 2; end <= array.length; end++) {
            let subArray = array.slice(start, end)
            newArray.push(subArray);
        }
    }
    return newArray
}

console.log('cau 282: change value min-max  ', question2([1, 2, 3]));


// bai 283: Liệt kê dãy con tăng dần

function question3(array) {
    if (array.length === 0) {
        return [];
    }
    let newArray = [];
    for (let start = 0; start < array.length; start++) {
        let sub = [array[start]];  //  chạy vòng lặp qua từng phân tử trong mảng array từ vị tri start 
        newArray.push([...sub]);     
        for (let end = start + 1; end < array.length; end++) {
            if (array[end] > sub[sub.length - 1]) {
                sub.push(array[end]);
                newArray.push([...sub]);
            }
            else {
                break;
            }
        }
    }
    return newArray;
}

console.log('cau 283: liet ke day con tang dan  ', question3([1, 2, 3]));


// bai 284: Liệt kê dãy con tăng và chứa giá trị lớn nhất

function question4(array) {
    if (array.length === 0) {
        return [];
    }
    let newArray = [];
    for (let start = 0; start < array.length; start++) {
        let sub = [array[start]]; 
        newArray.push([...sub]);     
        for (let end = start + 1; end < array.length; end++) {
            if (array[end] > sub[sub.length - 1] && array[end] >= Math.max(...sub)) {
                sub.push(array[end]);
                newArray.push([...sub]);
            }
            else {
                break;
            }
        }
    }
    return newArray;
}

console.log('cau 284: liet ke day con tang dan chua gia tri lon nhat  ', question4([1, 2, 3]));


// bai 285: Tính tổng từng mảng con tăng


function question5(arraySub) {
    function calculator(array) {
        if (array.length === 0) {
            return array;
        }
        let newArray = [];
        for (let start = 0; start < array.length; start++) {
            let sub = [array[start]];  // khai bao sub = cac phan tu trong mang array
            newArray.push([...sub]);        // dua cac phan tu start tu mang array vao sub 
            for (let end = start + 1; end < array.length; end++) {
                if (array[end] > sub[sub.length - 1]) {
                    sub.push(array[end]);   // dua cac phan tu end tu mang array vao sub 
                    newArray.push([...sub]);   // truyen cac phan tu cua mang sub vao newArray
                }
                else {
                    break;
                }
            }
        }
        return newArray;
    }
    const newSubArray = calculator(arraySub);
    let sum = 0;
    for (let i = 0; i < newSubArray.length; i++) {
        let s2 = newSubArray[i].reduce((s, v) => s += v, 0);
        sum += s2;
    }
    return sum;
}
console.log('cau 285: tong mang con tang:  ', question5([1, 2, 3]));


// bai 286: Đếm mảng con tăng có độ dài lớn hơn 1

function question6(value) {
    if (value.length === 0) {
        return [];
    }
    function calculator(array) {
        let newArray = [];
        for (let start = 0; start < array.length; start++) {
            let sub = [array[start]];
            newArray.push([...sub]);
            for (let end = start + 1; end < array.length; end++) {
                if (array[end] > sub[sub.length - 1] && array[end] >= 0) {
                    sub.push(array[end]);
                    newArray.push([...sub]);
                }
                else {
                    break;
                }
            }
        }
        return newArray;
    }
    let arraySub = calculator(value);
    let count = 0;
    for (let i = 0; i < arraySub.length; i++) {
        if (arraySub[i].length > 1) {
            count++;
        }
    }
    return count;
}
console.log('cau 286: dem mang con lon hon 1:  ', question6([1, 2, 3, 4]));


// bai 287: Liệt kê dãy con toàn dương và có độ dài lớn hơn 1 **

function question7(value) {
    if (value.length === 0) {
        return [];
    }
    function calculator(array) {
        let newArray = [];
        for (let start = 0; start < array.length; start++) {
            let sub = [array[start]];
            newArray.push([...sub]);
            for (let end = start + 1; end < array.length; end++) {
                if (array[end] > sub[sub.length - 1] && array[end] > 0) {
                    sub.push(array[end]);
                    newArray.push([...sub]);
                }
                else {
                    break;
                }
            }
        }
        return newArray;
    }
    let arraySub = calculator(value);
    let result = [];
    for (let i = 0; i < arraySub.length; i++) {
        if (arraySub[i].length > 1) {
            result.push(arraySub[i]);
        }
    }
    return result;
}
console.log("cau 287: Liet ke day con toan duong va co do dai lon hon 1: ", question7([1, -2, 3, 4, -5, 6, -7, 8, 9]));


// bai 288: Đếm mảng con giảm

function question8(value) {
    if (value.length === 0) {
        return [];
    }
    function calculator(array) {
        let newArray = [];
        for (let start = 0; start < array.length; start++) {
            let sub = [array[start]];
            newArray.push([...sub]);
            for (let end = start + 1; end < array.length; end++) {
                if (array[end] > sub[sub.length - 1]) {
                    sub.push(array[end]);
                    newArray.push([...sub]);
                }
                else {
                    break;
                }
            }
        }
        console.log(newArray);
        return newArray;
    }
    let arraySub = calculator(value);
    let count = 0;
    for (let i = 0; i < arraySub.length; i++) {
        if (arraySub[i].sort((a, b) => b - a)) {
            count++;
        }
    }
    return count;
}
console.log("Bài 288: Số mảng con giảm:", question8([1, 2, 3]));

// bai 289: Cho biết mảng a có phải là mảng con của mảng b không

function question9(arrayA, arrayB) {
    if (arrayA.length === 0 && arrayB.length === 0) {
        return [];
    } 
    else if (arrayA.length === 0) {
        return [];
    }
    else if (arrayB.length === 0) {
        return [];
    }
    if (arrayA.length > arrayB.length) {
        return 'mang A khong phai la mang con cua mang B';
    }
    let i = 0;
    let j = 0;
    while (i < arrayA.length && j < arrayB.length) {
        if (arrayA[i] === arrayB[j]) {
            i++;
        }
        j++;
    }
    if (i === arrayA.length) {
        return `${arrayA} la mang con cua ${arrayB}.`;
    } else {
        return `${arrayA} khong phai la mang con cua ${arrayB}.`;
    }
}
console.log("Bài 289: ", question9([1, 2, 3 , 4], [1, 2, 3, 4]));

// bai 290: Đếm số lần xuất hiện của mảng a trong mảng b

function question10(arrayA, arrayB) {
    if (arrayA.length === 0 && arrayB.length === 0) {
        return [];
    }
    else if (arrayA.length === 0) {
        return [];
    }
    else if (arrayB.length === 0) {
        return [];
    }
    if (arrayA.length < arrayB.length) {
        return 'mang A khong phai la mang con cua mang B';
    }
    let i = 0;
    let j = 0;
    let count = 0;
    while (i <= arrayB.length - arrayA.length) {
        while (j < arrayA.length && arrayA[j] === arrayB[i + j]) {
            j++;
        }
        if (j === arrayA.length) {
            count++;
            i += arrayA.length;
        } else {
            i++;
        }
    }
    return count;
}

console.log("Bài 290: ", question10([1, 2, 3 , 4], [1, 2, 3, 4]));



