// bai 271: Đảo ngược thứ tự các số chẵn trong mảng

function question1(array) {
    if (array.length === 0) {
        return [];
    }
    let even = [];
    let odd = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            even.push(array[i]);
        }
        else {
            odd.push(array[i]);
        }
    }
    even.reverse();
    return even.concat(odd);
}

console.log('cau 271: dao nguoc thu tu cac so chan  ', question1([1, 2, 3, 4, 0, 5, 6, 0, 7, 8, 9]));

// bai 272: Đảo ngược thứ tự số dương trong mảng

function question2(array) {
    if (array.length === 0) {
        return [];
    }
    let positive = [];
    let negative = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            positive.push(array[i]);
        }
        else {
            negative.push(array[i]);
        }
    }
    positive.reverse();
    return positive.concat(negative);
}

console.log('cau 272: dao nguoc thu tu cac so duong  ', question2([1, -2, -3, 4, 0, 5, -6, 0, 7, -8, 9]));

// bai 273: Dịch trái xoay vòng k phần tử trong mảng

function question3(array, k) {
    if (array.length === 0) {
        return [];
    }
    else {
        if (k === 0) {
            return array;
        }
    }
    let rotation = k % array.length;    /// lay so lan di chuyen sang trai cua k;
    for (let i = 0; i < rotation; i++) {
        let firstElement = array.shift();    // lay gia tri dau tien cua mang
        array.push(firstElement);   // them phan tu vao cuoi mang
    }
    return array;
}

console.log('cau 273: dich trai xoay vong k phan tu  ', question3([1, -2, -3, 4, 0, 5, -6, 0, 7, -8, 9], 0));


// bai 274: Dịch phải xoay vòng k phần tử trong mảng

function question4(array, k) {
    if (array.length === 0) {
        return [];
    }
    else {
        if (k === 0) {
            return array;
        }
    }
    let rotation = k % array.length; 
    for (let i = 0; i < rotation; i++) {
        let endElement = array.pop();
        array.unshift(endElement);
    }
    return array;
}

console.log('cau 274: dich phai xoay vong k phan tu  ', question4([1, -2, -3, 4, 0, 5, -6, 0, 7, -8, 9], 4));


// bai 275: Hãy xuất phần tử trong mảng theo yêu cầu: chẵn vàng, lẻ trắng

function question5(array) {
    if (array.length === 0) {
        return [];
    }
    let color = array.map(num => {    // tao Map luu cac phan tu

        if (num % 2 === 0) {
            return {value: num, color : 'yellow'}
        }   
        else {
            return {value: num, color: 'white'}
        }
    });
    color.forEach(item => {
        if (item.color === 'yellow') {
            console.log(`cau 275: phan tu chan ${item.value} co mau vang`);
          } else {
            console.log(`cau 275: phan tu le ${item.value} co mau trang`);
          }
    });
    return array;
}

question5([1, 2, 3, 4, 0, 5, 6, 0, 7, 8, 9]);

// bai 276: Xuất mảng: chẵn nằm trên 1 mảng, lẻ nằm trên hàng tiếp theo

function question6(array) {
    if (array.length === 0) {
        return [];
    }
    let positive = [];
    let negative = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            positive.push(array[i]);
        }
        else {
            negative.push(array[i]);
        }
    }
    return `mang chan: [${positive}]     mang le: [${negative}]`;
}

console.log('cau 276: mang chan va mang le:  ', question6([1, 2, 3, 4, 0, 5, 6, 0, 7, 8, 9]));



// bai 277: Đảo ngược thứ tự số chẵn và lẻ trong mảng nhưng giữ vị trí tương đối

// bai 279: Biến đổi mảng bằng cách thay giá trị max = giá trị min và ngược lại

function question8(array) {
    if (array.length === 0) {
        return [];
    }
    let minValue = Math.min(...array);
    let maxValue = Math.max(...array);

    let minIndex = array.indexOf(minValue);
    let maxIndex = array.indexOf(maxValue);

    array[minIndex] = maxValue;
    array[maxIndex] = minValue;
    
    return array;
}

console.log('cau 278: change value min-max  ', question8([1, 2, 3, 4, 5, 6, 7, 8, 9]));


// bai 280: Biến đổi mảng  số thực bằng cách thay tất cả phần tử trong mảng bằng số nguyên gần nó nhất (giống làm tròn)

function question10(array) {
    if (array.length === 0) {
        return [];
    }
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(Math.round(array[i]));     /// Math.round  dung de lam tron den so nguyen gan nhat
    }
    return newArray;
    
}

console.log('cau 280: thay tat ca so thuc thanh so nguyen gan nhat: ', question10([3.14159, -2.71828, 1.61803, -0.57721, 4.66920]));


