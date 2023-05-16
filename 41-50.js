/* bai 41: Cho n là số nguyên dương. 
Hãy tìm giá trị nguyên dương k lớn nhất sao cho S(k)  < n. 
Trong đó chuỗi k được định nghĩa như sau: S(k) = 1 + 2 + 3 + … + k
*/
function question1(number) {
    let count = 1;
    let sum = 1;
    while (sum < number) {
        count++;
        sum += count;
    }
    console.log('cau 41: ', count - 1);
}
question1(20);


/*bai 42: Hãy đếm số lượng chữ số của số nguyên dương n*/

function question2(number) {
    let numberString = number.toString();
    console.log('cau 42: ', numberString.length);
}
question2(10);


// bai 43 : Hãy tính tổng các chữ số của số nguyên dương n

function question3(number) {
    let sum = 0;
    let numberString = number.toString();  // toString dùng để chuyển đổi number thành chuỗi
    for (let i = 0; i < numberString.length; i++) {
        sum += parseInt(numberString[i]);  // parseInt dùng để chuyển đổi kí tự thành số nguyên
    }
    console.log('cau 43: ', sum); // tra ve sum
}
question3(13);


// cau 44: Hãy tính tích các chữ số của số nguyên dương n

function question4(number) {
    let sum = 1;  // khai bao tong bang 1
    let numberString = number.toString();  // khai bao numberString bang number.toString() de chuyen xang so nguyen duong
    for (let i = 0; i < numberString.length; i++) {
        sum *= parseInt(numberString[i]);  // parseInt dung de chuyen doi ki tu thanh so nguyen
    }
    console.log('cau 44: ', sum);
}
question4(13);



// cau 45: Hãy đếm số lượng chữ số lẻ của số nguyên dương n

function question5(number) {
    let count = 0;  // khai bao bien dem count ++ 
    let numberString = number.toString();  // khai bao numberString bang number.toString() de chuyen xang so nguyen duong
    for (let i = 0; i < numberString.length; i++) {
        let sum = parseInt(numberString[i]);  // parseInt dung de chuyen doi ki tu thanh so nguyen
        // điều kiện sum chia 2 khac 0
        if (sum % 2 !== 0) {
            count++;
        }
    }
    console.log('cau 45: ', count);
}
question5(12344);


// bai 46:  Hãy tính tổng các chữ số chẵn của số nguyên dương n

function question6(number) {
    let value = 0;
    let numberString = number.toString();  // khai bao numberString bang number.toString() de chuyen xang so nguyen duong
    for (let i = 0; i < numberString.length; i++) {
        let sum = parseInt(numberString[i]);  // parseInt dung de chuyen doi ki tu thanh so nguyen
        // điều kiện sum chia 2 khac 0
        if (sum % 2 === 0) {
            value += sum;
        }
    }
    console.log('cau 46: ', value);
}
question6(1234);


// bai 47: Hãy tính tích các chữ số lẻ của số nguyên dương n

function question7(number) {
    let numberString = number.toString();
    let sum = 1;  // phép nhân nên phải khai báo tổng bằng 1
    for (let i = 0; i < numberString.length; i++) {
        let value = parseInt(numberString[i]);  // chuyển đổi kí tự thành số nguyên 
        if (value & 2 !== 0) {
            sum *= value;
        }
    }
    console.log('cau 47: ', sum);
}
question7(1235);


// bai 48: Cho số nguyên dương n. Hãy tìm chữ số đầu tiên của n


function question8(number) {
    let numberString = number.toString();  // chuyển số thành chuỗi bằng number.toString
    console.log('cau 48: ', parseInt(numberString[0]));  // in ra chữ cố đầu tiên trong chuỗi 
}
question8(9832437812);


// bai 49: Hãy tìm số đảo ngược của số nguyên dương n


function question9(number) {
    let sum = 0;   // khai báo biến lưu tổng 
    while (number > 0) {
        sum = sum * 10 + (number % 10);  // 
        number = Math.floor(number / 10);  // 2 3 2 0 1 ++
    }
    console.log('cau 49: ', sum);
}
question9(10232);


// bai 50: Tìm chữ số lớn nhất của số nguyên dương n

function question10(number) {
    let numberLagest = number.toString()[0];  // khai bao va chuyen xang chuoi
    for (let i = 1; i <= number.toString().length; i++) {
        if (number.toString()[i] > numberLagest ) {
            numberLagest = number.toString()[i];
        }
    }
    console.log('cau 50: ', numberLagest);
}
question10(1293456);