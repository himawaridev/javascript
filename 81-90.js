// bai 81:  Nhập vào tháng của 1 năm. Cho biết tháng thuộc quý mấy trong năm

function question1(number) {
    if (1 <= number && number <= 3) {
        console.log('cau 81: thang', number, 'thuoc quy 1 nam 2023');
    }
    else if (4 <= number && number <= 6) {
        console.log('cau 81: thang', number, 'thuoc quy 2 nam 2023');
    }
    else if (7 <= number && number <= 9) {
        console.log('cau 81: thang', number, 'thuoc quy 3 nam 2023');
    }
    else if (10 <= number && number <= 12) {
        console.log('cau 81: thang', number, 'thuoc quy 4 nam 2023');
    }
    else {
        console.log('cau 81: error');
    }
}
question1(4);


// bai 82: Tính S(n) = 1^3 + 2^3 + … + N^3 

function question2(number) {
    sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += Math.pow(i, 3);
    }
    console.log('cau 82: ', sum);
}
question2(3);


// bai 83: Tìm số nguyên dương n nhỏ nhất sao cho 1 + 2 + … + n > 10000 

function question3() {
    let n = 1;
    let sum = 0;

    while (sum <= 10000) {
        sum += n;
        n++;
    }
    console.log('cau 83: ', n - 1);
}
question3();


// bai 84: Hãy sử dụng vòng lặp for để xuất tất cả các ký tự từ A đến Z

function question4() {
    let arr = [];
    for (let i = 65; i <= 90; i++) {
        let character = String.fromCharCode(i);  // fromCharCode la chuyen tu chuoi so thanh ki tu a-z
        arr.push(character);
    }
    console.log('cau 84: ', arr);
}
question4();


// bai 85: Viết chương trình tính tổng các giá trị lẻ nguyên dương nhỏ hơn N

function question5(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    console.log('cau 85: ', sum);
}
question5(4);


// bai 86: Viết chương trình tìm số nguyên dương m lớn nhất sao cho 1 + 2 + … + m < N

function question6(number) {
    let m = 1;
    let sum = 0;
    while (sum < number) {
        sum += m;
        m++;
    }
    console.log('cau 86: ', m - 2);
}
question6(100);


// bai 87: In tất cả các số nguyên dương lẻ nhỏ hơn 100

function question7() {
    let arr = [];
    for (let i = 1; i < 100; i++) {
        if (i % 2 !== 0) {
            arr.push(i);
        }
    }
    console.log('cau 87: ', arr);
}
question7();


// bai 88: Tìm ước số chung lớn nhất của 2 số nguyên dương

function question8(a, b) {
    if (a === 0) {
        return b;
    }
    else if (b === 0) {
        return a;
    }
    while (b !== 0) {
        let c = a % b;  // c = 30 % 17 = 13; 17 % 13 = 2 ; 13 % 2 = 1 (kết quả là phần dư);
        a = b;   //  a = 17 a = 2
        b = c;   // b = 13  b = 1
    }
    return a;

}
console.log('cau 88: ', question8(6, 2)); // 2


// bai 89: Viết chương trình kiểm tra 1 số có phải là số nguyên tố hay không

function question9(number) {
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
console.log('cau 89: ', question9(11));


// bai 90: Viết chương trình in ra tất cả các số lẻ nhỏ hơn 100 trừ các số 5, 7, 93

function question10() {
    let arr = [];
    for (let i = 0; i < 100; i++) {
        if (i % 2 !== 0 && i !== 5 && i !== 7 && i !== 93) {
            arr.push(i);
        }
    }
    console.log('cau 90: ', arr);
}
question10();