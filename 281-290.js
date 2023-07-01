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

console.log('cau 283: liet ke day con tang dan  ', question3([1, 2, 3, 4]));


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
    function calculator(array) {
        if (array.length === 0) {
            return [];
        }
        let newArray = [];
        for (let start = 0; start < array.length; start++) {
            let sub = [array[start]];
            newArray.push([...sub]);
            for (let end = start + 1; end < array.length; end++) {
                if (array[end] > sub[sub[sub.length - 1]]) {
                    sub.push(array[end]);
                    newArray.push([...sub]);
                }
            }
        }
        return newArray;
    }
    let count = 0;
    for (let i = 0; i < calculator(value).length; i++) {
        if (calculator(value).length > 1) {
            count++;
        }
    }
    return count;
}
console.log('cau 286: dem mang con lon hon 1:  ', question6([1, 2, 3, 4]));

