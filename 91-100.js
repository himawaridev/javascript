// bai 91: Viết chương trình nhập 3 số thực. Hãy thay tất cả các số âm bằng trị tuyệt đối của nó

// function question1(a, b, c) {
//     if (a >= 0 || b >= 0 || c >= 0) {
//         return a, b, c;
//     }
//     else if (a <= 0 || b <= 0 || c <= 0) {
//         return -a, -b, -c;
//     }
//     console.log(a, b, c);
// }
// question1(-1.23, -4, 6);


// bai 92: Viết chương trình nhập giá trị x sau tính giá trị của hàm số
// f(x) = 2x^2 + 5x + 9 khi x >= 5, f(x) = -2x^2 + 4x – 9 khi x < 5

function question2(number) {
    let sum = 0;
    if (number >= 5) {
        sum = 2 * Math.pow(number, 2) + 5 * number + 9;
        console.log('cau 92: ', sum);
    }
    else if (number < 5) {
        sum = -2 * Math.pow(number, 2) + 4 * number - 9;
        console.log('cau 92: ', sum);
    }
}
question2(7);


// bai 93: Viết chương trình nhập 3 cạnh của 1 tam giác, cho biết đó là tam giác gì

function question3(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        console.log('cau 93: tam giac kgon hop le!');
    }
    else if (a === b && b === c) {
        console.log('cau 93: day la tam giac deu');
    }
    else if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) || Math.pow(a, 2) + Math.pow(c, 2) === Math.pow(b, 2) || Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a, 2)) {
        console.log('cau 93: day la tam giac vuong');
    }
    else if (a === b || a === c || b === c) {
        console.log('cau 93: day la tam giac can');
    }
    else {
        console.log('cau 93: day la tam giac thuong');
    }
}
question3(5, 10, 12);



// bai 94: Lập chương trình giải hệ: ax + by = c, Dx + ey = f. Các hệ số nhập từ bàn phím
/*
ax + by = c
dx + ey = f
*/

function question4(a, b, c, d, e, f) {
    let D = a * e - d * b;
    if (D === 0) {
        console.log('cau 94: phuong trinh vo nghiem hoac co vo so nghiem');
    }
    else {
        let x = (c * e - b * f) / D;
        let y = (a * f - c * d) / D;
        console.log('cau 94: x =', x, 'y =', y);
    }
}
question4(1, 4, 7, 3, 8, 5);



// bai 95: Viết chương trình nhập vào 3 số thực. Hãy in 3 số ấy ra màn hình theo thứ tự tang dần mà chỉ dùng tối đa 1 biến phụ

function question5(a, b, c) {
    if (a > b) {
        [a, b] = [b, a];
    }
    if (b > c) {
        [b, c] = [c, b]
    }
    if (a > b) {
        [a, b] = [b, a];
    }
    console.log('cau 95: ', a, b, c);
}
question5(5, 7, 3);



// bai 96: Viết chương trình giải phương trình bậc 2 ax^2 + bx + c = 0

function question6(a, b, c) {
    let delta = Math.pow(b, 2) - 4 * a * c;
    if (delta < 0) {
        console.log('cau 96: phuong trinh vo nghiem');
    }
    else if (delta === 0) {
        let x = -b / (2 * a);
        console.log('cau 96: phuong trinh co nghiem kiep x = ', x);
    }
    else if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log('cau 96: phuong trinh co hai nghiem phan biet x1 =', x1, 'x2 =', x2);
    }
}
question6(2, 5, 3);



// bai 97: Viết chương trình nhập tháng, năm. Hãy cho biết tháng đó có bao nhiêu ngày

function question7(month) {
    if (month % 2 !== 0 && month !== 2 && month <= 12) {
        console.log('cau 97: thang', month, 'co 31 ngay');
    }
    else if (month % 2 === 0 && month !== 2 && month <= 12) {
        console.log('cau 97: thang', month, 'co 30 ngay');
    }
    else {
        console.log('cau 97: thang', month, 'co 28 ngay');
    }
}
question7(4);


// bai 98: Viết chương trình nhập vào 1 ngày ( ngày, tháng, năm). Tìm ngày kế ngày vừa nhập (ngày, tháng, năm)

function question8(dd, mm, yy) {
    if (dd === 31 || dd === 30 || dd === 28);
}

// bai 99: Viết chương trình nhập vào 1 ngày ( ngày, tháng, năm). Tìm ngày trước ngày vừa nhập (ngày, tháng, năm)


// bai 100: Viết chương trình nhập ngày, tháng, năm. Tính xem ngày đó là ngày thứ bao nhiêu trong năm

function question10(dd,mm,yy) {
    let sum = 0;
    for (let i = 1; i <= days; i++) {
        
    }
}


