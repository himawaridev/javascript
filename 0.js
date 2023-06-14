function question9(array) {
  if (array.length === 0) {
      return null;
  }
  let frequencyMap = new Map(); // Sử dụng Map để lưu trữ tần suất xuất hiện của các giá trị
  let arr = [];
  
  for (let i = 0; i < array.length; i++) {
      let value = array[i];
      if (frequencyMap.has(value)) {
          frequencyMap.set(value, frequencyMap.get(value) + 1);
      } else {
          frequencyMap.set(value, 1);
      }
  }
  
  frequencyMap.forEach((count, value) => {
      if (count > 1) {
          arr.push(value);
      }
  });
  
  return arr;
}

console.log('cau 219: Các giá trị xuất hiện hơn 1 lần trong mảng là:', question9([1, 2, 3, 2, 4, 1, 3, 5, 1]));
