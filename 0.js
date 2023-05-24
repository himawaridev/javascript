function lietKeSoChan(mang) {
  console.log("Các giá trị chẵn trong mảng:");
  for (var i = 0; i < mang.length; i++) {
    if (mang[i] % 2 === 0) {
      console.log(mang[i]);
    }
  }
}

// Ví dụ sử dụng:
var mangSoNguyen = [-2, 5, 0, 10, -7, 3, 8, -1, 4, -6, 9, -3, 2];
lietKeSoChan(mangSoNguyen);

function question10(array) {
  if (array === 0) {
    return null;
  }
  let arr = [];
  for (let i = 0; i <= array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log(array[i]);
    }
  }
}
question10([-2, 5, 0, 10, -7, 3, 8, -1, 4, -6, 9, -3, 2]);