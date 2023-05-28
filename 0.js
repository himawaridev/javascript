function findFirstEven(array) {
    if (array.length === 0) {
      return -1;
    }
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        return array[i];
      }
    }
  
    return -1;
  }
  
  // Sử dụng hàm findFirstEven để tìm số chẵn đầu tiên trong mảng
  const numbers = [1,2, 8, 3, 5, 2, 7, 9];
  const firstEven = findFirstEven(numbers);
  console.log("Số chẵn đầu tiên trong mảng là:", firstEven);
  