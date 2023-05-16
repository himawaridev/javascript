function question1(number) {
  let minDigit = Number.MAX_SAFE_INTEGER; // Khởi tạo giá trị minDigit lớn nhất có thể
  let numberString = number.toString();
  for (let i = 0; i < numberString.length; i++) {
      let currentDigit = parseInt(numberString[i]);
      if (currentDigit < minDigit) {
          minDigit = currentDigit;
      }
  }
  console.log(minDigit);
}
question1(24821); // Kết quả: 1
