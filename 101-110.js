// bai 101: Viết chương trình nhập 1 số nguyên có 2 chữ số.  Hãy in ra cách đọc của số nguyên nàys

function question1(number) {
    if (number >= 10 && number < 100) {
        let units = number % 10;   // khai bao hang don vi 
        let dozens = Math.floor(number / 10);   // khai bao hang chuc
        let arrayUnits = ["", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
        let arrayDozens = ["", "mười", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];
        let unitsWord = arrayUnits[units];
        let dozensWord = arrayDozens[dozens];
        console.log('cau 101: cach doc cua so:', number, 'la', dozensWord + " " + unitsWord);
    }
    else {
        console.log('cau 101: gia tri nhap vao sai');
    }
}
question1(57);

// bai 102: Viết chương trình nhập 1 số nguyên có 3 chữ số.  Hãy in ra cách đọc của số nguyên này

function question2(number) {
    if (number > 99 && number < 1000) {
        let units = number % 10;   // ex: 102 % 100 du 2 hang don vi
        let dozens = Math.floor((number % 100) / 10);  // ex: 264 %  100 = 2 du 64 / 10 = 6,4 lay 6
        let hundreds = Math.floor(number / 100);  // ex 254 / 100 = 2 
        let arrayUnits = ["", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
        let arrayDozens = ["", "mười", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];
        let arrayHundreds = ["", "một trăm", "hai trăm", "ba trăm", "bốn trăm", "năm trăm", "sáu trăm", "bảy trăm", "tám trăm", "chín trăm"];
        let unitsWord = arrayUnits[units];
        let dozensWord = arrayDozens[dozens];
        let hundredsWord = arrayHundreds[hundreds];
        console.log('cau 102: cach doc cua so:', number, 'la', hundredsWord + " " + dozensWord + " " + unitsWord);
    }
    else {
        console.log('cau 102: gia tri nhap vao sai');
    }
}
question2(264);



//bai 103:  Viết hàm tính S = CanBacN(x)

function question3(x, n) {
    let sum = Math.pow(x, 1 / n); // can bac x = x mu 1 / n
    console.log('cau 103: ', sum);
}
question3(2, 3);


// bai 104: Viết hàm tính S = x^y

function question4(x, y) {
    let sum = Math.pow(x, y);
    console.log('cau 104: ', sum);
}
question4(2, 3);


// bai 105: Viết chương trình in bảng cửu chương ra màn hình

function question5() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            sum = j * i;
            console.log('cau 105: 2 ', i, 'x', j, '=', sum);
        }
    }
}
question5();



// bai 106:  Cần có tổng 200000 đồng từ 3 loại giấy bạc 1000 đồng, 2000 đồng, 5000 đồng. 
// Lập chương trình để tìm ra tất cả các phương án có thể

function question6() {
    let total = 200000;
    let count = 0;
    let sum = 0;
    for (let i = 0; i <= total / 1000; i++) {
        for (let j = 0; j <= total / 2000; j++) {
            for (let k = 0; k <= total / 5000; k++) {
                sum = i * 1000 + j * 2000 + k * 5000;
                if (sum === total) {
                    console.log('cau 106: phương án: ', count++, 'la kha dung :')
                    console.log('- so giay bac 1000 la: ', i)
                    console.log('- so giay bac 2000 la: ', j)
                    console.log('- so giay bac 5000 la: ', k)
                    console.log("--------------------------");
                }
            }
        }
    }
}
question6();



// Bài 107: Lập chương trình tính sin(x) với độ chính xác 0.00001 theo công thức: 
// Sin(x) = x – x^3/3! + x^5/5! + … + (-1)^n . x^2n + 1/(2n + 1)!

function question7(x, n) {
    let sin = x;
    let sum = sin;
    var n = 1; // Bước nhảy ban đầu
    let epsilon = 0.00001; // Độ chính xác
    while (Math.abs(sin) > epsilon) {
        sin = (-1) * sin * x * x / ((2 * n) * (2 * n + 1));
        sum += sin;
        n++;
    }
    return sum;
}
console.log('cau 107: ', question7(2));



// bai 108: Viết chương trình nhập họ tên, điểm toán, điểm văn của 1 học sinh. Tính điểm trung bình và xuất ra kết quả

function question8(name, math, literature) {
    let sum = (math + literature) / 2;
    console.log('cau 109: so diem trung binh cua', name, 'la: ', sum);
}
question8('Hoang Trung Dung', 6.3, 7.7);



// bai 109: Viết chương trình nhập n và tính tổng S = 1 + 2 + 3 + … + n

function question9(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    console.log('cau 109: ', sum);
}
question9(10);



// bai 110: Viết chương trình nhập n và tính tổng S(n) = x + x^2 + x^3 + … + x^n

function question10(x, n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += Math.pow(x, i);
    }
    console.log('cau 110: ', sum);
}
question10(2, 10);


