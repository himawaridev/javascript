// cau 51: Tìm chữ số nhỏ nhất của số nguyên dương n

function question1(number) {
    let min = 9; // giá trị khởi tạo ban đầu của min rồi so sánh nó với từng giá trị trong chuỗi
    while (number > 0) {
        let count = number % 10; // lấy chữ số cuối cùng của number
        if (count < min) {
            min = count; // gán min bằng chữ số mới nhỏ hơn
        }
        number = Math.floor(number / 10); // loại bỏ chữ số vừa lấy
    }
    console.log('cau 51: ', min); // kết quả: 1
}
question1(32142115);


// cau 52: Hãy đếm số lượng chữ số lớn nhất của số nguyên dương n 


function question2(number) {
    let maxDigit = number.toString()[0];   // chữ số đầu tiên của số nguyên dương n
    let count = 0;   // tạo biến đếm từ 0 của chữ số lớn nhất 
    for (let i = 1; i < number.toString().length; i++) {
        let digit = number.toString()[i];
        if (digit > maxDigit) {
            maxDigit = digit;
            count = 1;
        } else if (digit === maxDigit) {
            count++;
        }
    }
    console.log('cau 52: ', count);
}
question2(2827788884558);


// bai 53: Hãy đếm số lượng chữ số nhỏ nhất của số nguyên dương n

function question3(number) {
    let minDigit = number.toString()[0];   // chữ số đầu tiên của số nguyên dương n
    let count = 0;   // tạo biến đếm từ 0 của chữ số lớn nhất 
    for (let i = 1; i < number.toString().length; i++) {
        let digit = number.toString()[i];
        if (digit < minDigit) {
            minDigit = digit;
            count = 1;
        } else if (digit === minDigit) {
            count++;
        }
    }
    console.log('cau 53: ', count);
}
question3(282778228884558);


// bai 54: Hãy kiểm tra số nguyên dương n có toàn chữ số lẻ hay không


function question4(number) {
    let numberString = number.toString();
    for (let i = 0; i < numberString.length; i++) {
        if (parseInt(numberString[i]) % 2 === 0) {
            return false;
        }
    }
    return true;
}
console.log('cau 54: ', question4(283829));  //trả về true or false 


// cau 55:  Hãy kiểm tra số nguyên dương n có toàn chữ số chẵn hay không

function question5(number) {
    let numberString = number.toString();
    for (let i = 0; i < numberString.length; i++) {
        if (parseInt(numberString[i]) % 2 !== 0) {
            return false;
        }
    }
    return true;
}
console.log('cau 55: ', question5(222446284));  //trả về true or false 


// bai 56: Hãy kiểm tra số nguyên dương n có phải là số đối xứng hay không

function question6(number) {
    let numberString = number.toString();  // khai báo biến và chuyển nó thành chuỗi 
    // khai béo biến đảo ngược của biến trên và sử dụng câu lệnh để đảo ngược chuỗi 
    let reverseNumberString = numberString.split("").reverse().join("");
    if (numberString === reverseNumberString) {  // so sánh hai biến với nhau 
        return true;
    }
    else {
        return false;
    }
}
console.log('cau 56: ', question6(123321));


// cau 57: Hãy kiểm tra các chữ số của số nguyên dương n có tăng dần từ trái sang phải hay không

function question7(number) {
    let numberString = number.toString();
    for (let i = 0; i < numberString.length; i++) {
        if (numberString[i] <= numberString[i - 1]) {
            return false;
        }
    }
    return true;
}
console.log('cau 57: ', question7(1235456));


// bai 58:  Hãy kiểm tra các chữ số của số nguyên dương n có giảm dần từ trái sang phải hay không

function question8(number) {
    let numberString = number.toString();
    for (let i = 0; i < numberString.length; i++) {
        if (numberString[i] >= numberString[i - 1])
            return false;
    }
    return true;
}
console.log('cau 58: ', question8(5321));


// bai 59: Cho 2 số nguyên dương a và b.Hãy tìm ước chung lớn nhất của 2 số này.

function question9(a, b) {
    if (a === 0) {    // nếu a bằng 0 thì sẽ trả về ước số chung lớn nhất là chính b
        return b;
    }
    if (b === 0) {    // nếu b bằng 0 thì sẽ trả về ước số chung lớn nhất là chính a 
        return a;
    }
    while (b !== 0) {
        let c = a % b;  // c = 30 % 17 = 13; 17 % 13 = 2 ; 13 % 2 = 1 (kết quả là phần dư);
        a = b;   //  a = 17 a = 2
        b = c;   // b = 13  b = 1
    }
    return a;
}
console.log('cau 59: ', question9(30, 17)); // 2



// bai 60: Cho 2 số nguyên dương a và b.Hãy tìm bội chung nhỏ nhất của 2 số này

function question10(a, b) {
    if (a === 0) {    // nếu a bằng 0 thì sẽ trả về ước số chung lớn nhất là chính b
        return b;
    }
    if (b === 0) {    // nếu b bằng 0 thì sẽ trả về ước số chung lớn nhất là chính a 
        return a;
    }
    while (b !== 0) {
        let c = a % b;  // c = 30 % 17 = 13; 17 % 13 = 2 ; 13 % 2 = 1 (kết quả là phần dư);
        a = b;   //  a = 17 a = 2
        b = c;   // b = 13  b = 1
    }
    return a;
}
function question11(a, b) {
    let sum = question10(a, b);
    return (a * b) / sum;
}
console.log('cau 60: ', question11(6, 8));