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
question1(321405);
