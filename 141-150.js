// bai 141: Hãy tìm số hoàn thiện nhỏ nhất trong mảng 1 chiều các số nguyên. Nếu mảng không có số hoàn thiện thì trả về -1

function calculator1(number) {
    let sum = 0;
    for (let i = 0; i <= Math.floor(number / 2); i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum;
}
function question1(array) {
    if (array.length === 0) {
        return -1;
    }
    let minValue = -1;
    for (let i = 0; i < array.length; i++) {
        if (calculator1(array[i])) {
            if (minValue === -1 || array[i] < minValue) {
                minValue = array[i];
            }
        }
    }
    return minValue;
}
console.log('cau 141: so hoan thien nho nhat la:', question1([6, 8, 12, 28, 30, 36]));



// bai 142: Hãy tìm giá trị chẵn nhỏ nhất trong mảng 1 chiều các số nguyên. Nếu mảng không có số chẵn thì trả về -1

function question2(array) {
    if (array.length === 0) {
        return -1;
    }
    let minValue = Infinity;
    let condition = false;
    for (let i = 0; i <= array.length; i++) {
        if (array[i] % 2 === 0 && array[i] < minValue) {
            minValue = array[i];
            condition = true;
        }
    }
    if (condition) {
        return minValue;
    }
    else {
        return -1;
    }
}
console.log('cau 142: so chan nho nhat la:', question2([6, 8, -2, 12, 28, -30, 36]));



// bai 143: Hãy tìm vị trí giá trị âm nhỏ nhất trong mảng các số thực. Nếu mảng không có số âm thì trả về -1

function question3(array) {
    let minValue = 0;
    let condition = false;
    for (let i = 0; i <= array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i];
            condition = true;
        }
    }
    if (condition) {
        return minValue;
    }
    else {
        return -1;
    }
}
console.log('cau 143: so chan nho nhat la:', question3([1.5, 2.7, -3.2, 4.9, -5.1, 6.4, 7.2, -8.3, 9.6, 10.0]));



// bai 144: Hãy tìm giá trị trong mảng các số thực xa giá trị x nhất

function question4(array, x) {
    if (array.length === 0) {
        return null;
    }
    let arr = array[0];
    let farthestDistance = Math.abs(array[0] - x);

    for (let i = 1; i < array.length; i++) {
        let distance = Math.abs(array[i] - x);
        if (distance > farthestDistance) {
            farthestDistance = distance;
            arr = array[i];
        }
    }
    return arr;
}
let number = [1.5, -11, 2.7, -3.2, 4.9, -5.1, 6.4, 7.2, -8.3, 9.6, 50.0];
let x = 0;
let arrValue = question4(number, x);
console.log('cau 144: Giá trị xa giá trị', x, 'nhất trong mảng là:', arrValue);



// bai 145: Hãy tìm giá trị trong mảng các số thực gần giá trị x nhất

function question5(array, x) {
    if (array.length === 0) {
        return null;
    }
    let arr = array[0];
    let closestDistance = Math.abs(array[0] - x);

    for (let i = 1; i < array.length; i++) {
        let distance = Math.abs(array[i] - x);
        if (distance < closestDistance) {
            closestDistance = distance;
            arr = array[i]
        }
    }
    return arr;
}
let number1 = [1.5, -11, 2.7, -3.2, 4.9, -5.1, 6.4, 7.2, -8.3, 9.6, 50.0];
let x1 = 0;
let arrValue1 = question5(number, x);
console.log('cau 145: Giá trị xa giá trị', x1, 'nhất trong mảng là:', arrValue1);



// bai 146: Cho mảng 1 chiều các số thực, hãy tìm đoạn [a, b] sao cho đoạn này chứa tất cả các giá trị trong mảng

