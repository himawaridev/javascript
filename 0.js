function printNumbersInAscendingOrder(a, b, c) {
    if (a > b) {
      [a, b] = [b, a]; // Hoán đổi giá trị của a và b
    }
    if (b > c) {
      [b, c] = [c, b]; // Hoán đổi giá trị của b và c
    }
    if (a > b) {
      [a, b] = [b, a]; // Hoán đổi giá trị của a và b (nếu cần thiết)
    }
  
    console.log("Ba số theo thứ tự tăng dần:", a, b, c);
  }
  
  // Ví dụ sử dụng hàm printNumbersInAscendingOrder với a = 7, b = 3, c = 9
  let a = 7, b = 3, c = 9;
  printNumbersInAscendingOrder(a, b, c);
  