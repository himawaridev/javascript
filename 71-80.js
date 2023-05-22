// bai 71: Tính S(x, n) = 1 – x + x^3/3! – x^5/5! + … + (-1)^n+1 * x^2n+1/(2n + 1)!

function question1(x, n) {
    let sum = 0;
    let count = 1;
    let factorial = 1;
    for (let i = 0; i <= n; i++) {
        factorial *= (2 * i + 1);
        count = Math.pow(-1, i + 1) * (Math.pow(x, 2 * i + 1)) / factorial;
        sum += count;
    }
    console.log('cau 71: ', sum);
}
question1(2, 3);



// bai 72: Kiểm tra số nguyên 4 byte có dạng 2^k hay không

console.log('cau 72: error');

// bia 73: Kiểm tra số nguyên 4 byte có dạng 3^k hay không

console.log('cau 73: error');

/*
Trong JavaScript, kiểu dữ liệu số nguyên 4 byte không được định rõ, 
vì JavaScript sử dụng mô hình số học 64 bit để lưu trữ tất cả các số nguyên. 
Điều này cho phép JavaScript xử lý các số nguyên rất lớn, vượt quá giới hạn của số nguyên 4 byte.
Tuy nhiên, trong các ngôn ngữ lập trình khác như C, C++, Java, C#, 
số nguyên 4 byte được biểu diễn bằng các kiểu dữ liệu như int hoặc long, 
và giá trị của nó nằm trong khoảng từ -2,147,483,648 đến 2,147,483,647.
*/

// bai 74: Viết chương trình tính tổng của dãy số sau: S(n) = 1 + 2 + 3 + … + n

function question4(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    console.log('cau 74: ', sum)
}
question4(2)


// bai 75: Liệt kê tất cả các ước số của số nguyên dương n

function question5(number) {
    let arr = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            arr.push(i);
        }
    }
    console.log('cau 75: ', arr);
}
question5(8);


//bai 76: Hãy đếm số lượng chữ số của số nguyên dương n

function question6(number) {
    let string = number.toString();
    let count = string.length;
    console.log('cau 76: so luong chu so la', count);
}
question6(2141234);

// bai 77: Tính S(n) = x + x^2/1 + 2 + x^3/1 + 2 + 3 + … + x^n/1 + 2 + 3 + …. + N

function question7(x, n) {
    let sum = 0;
    let count = 0;
    for (let i = 1; i <= n; i++) {
        count += i;
        sum += Math.pow(x, i) / count;
    }
    console.log('cau 77: ', sum);
}
question7(3, 3);


// bai 78: Viết chương trình tìm số lớn nhất trong 3 số thực a, b, c

function question8(a, b, c) {
    if (a > b && a > c) {
        console.log('cau 78:  so lon nhat la:', a);
    }
    else if (a > a && b > c) {
        console.log('cau 78:  so lon nhat la:', b);
    }
    else if (c > a && c > b) {
        console.log('cau 78:  so lon nhat la:', c);
    }
}
question8(7, 3, 15);


// bai 79: Viết chương trình nhập 2 số thực, kiểm tra xem chúng có cùng dấu hay không

function question9(a, b) {
    if (a * b > 0) {
        console.log('cau 79: ', a, 'và', b, 'là hai số cùng dấu')
    }
    else if (a * b < 0) {
        console.log('cau 79: ', a, 'và', b, 'là hai số trai dấu')
    }
    else {
        console.log('cau 79: ', a, 'và', b, 'là hai số khong cùng dấu cung khong trai dau');
    }
}
question9(1, -5);


// bai 80: Viết chương trình giải và biện luận phương trình bậc nhất ax + b = 0

function question10(a, b) {
    let x = -b / a;
    if (a === 0) {
        if (b === 0) {
            console.log('cau 80: phuong trinh co vo so nghiem');
        }
        else {
            console.log('cau 80: phương trình vô nghiệm');
        }
    }
    else {
        console.log('cau 80: phuong trinh co nghiem x =', x);
    }
}
question10(4, -8);