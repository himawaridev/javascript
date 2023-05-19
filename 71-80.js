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