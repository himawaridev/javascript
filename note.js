// Bài 59: Hãy kiểm tra số nguyên dương n có phải là số đối xứng hay không
// Bài 60: Hãy kiểm tra các chữ số của số nguyên dương n có tăng dần từ trái sang phải hay không
// Bài 61: Hãy kiểm tra các chữ số của số nguyên dương n có giảm dần từ trái sang phải hay không
// Bài 62: Cho 2 số nguyên dương a và b.Hãy tìm ước chung lớn nhất của 2 số này.
//   Bài 63: Cho 2 số nguyên dương a và b.Hãy tìm bội chung nhỏ nhất của 2 số này
// Bài 64 + 65 + 66: Giải phương trình bậc 1, 2, 4
// Bài 67: Tính S(x, n) = x – x ^ 2 + x ^ 3 + … + (-1) ^ n + 1 * x ^ n
// Bài 68: Tính S(x, n) = -x ^ 2 + x ^ 4 + … + (-1) ^ n * x ^ 2n
// Bài 69: Tính S(x, n) = x – x ^ 3 + x ^ 5 + … + (-1) ^ n * x ^ 2n + 1
// Bài 70: Tính S(n) = 1 – 1 / (1 + 2) + 1 / (1 + 2 + 3) + … + (-1) ^ n + 1 * 1 / (1 + 2 + 3 + … + n)
// Bài 71: Tính S(x, n) = -x + x ^ 2 / (1 + 2) – x ^ 3 / (1 + 2 + 3) + … + (-1) ^ n * x ^ n / (1 + 2 +… + n)
// Bài 72: Tính S(x, n) = – x + x ^ 2 / 2! – x ^ 3 / 3! + … + (-1) ^ n * x ^ n / n!
// Bài 73: Tính S(x, n) = -1 + x ^ 2 / 2! – x ^ 4 / 4! + … + (-1) ^ n + 1 * x ^ 2n / (2n)!
// Bài 74: Tính S(x, n) = 1 – x + x ^ 3 / 3! – x ^ 5 / 5! + … + (-1) ^ n + 1 * x ^ 2n + 1 / (2n + 1)!
// Bài 75: Kiểm tra số nguyên 4 byte có dạng 2 ^ k hay không
// Bài 76: Kiểm tra số nguyên 4 byte có dạng 3 ^ k hay không

function UCLN(a, b) {
  if (a === 0) {
      return b;
  }
  if (b === 0) {
      return a;
  }
  while (b !== 0) {
      let c = a % b;
      a = b;
      b = c;
  }
  return a;
}

function BCNN(a, b) {
  let ucln = UCLN(a, b);
  return (a * b) / ucln;
}

// Ví dụ:
console.log(BCNN(6, 8)); // Kết quả là 24

