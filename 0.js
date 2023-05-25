function timViTriGiaTriNhoNhat(mang) {
  let giaTriNhoNhat = mang[0];
  let viTriGiaTriNhoNhat = 0;
  for (let i = 1; i < mang.length; i++) {
      if (mang[i] < giaTriNhoNhat) {
          giaTriNhoNhat = mang[i];
          viTriGiaTriNhoNhat = i;
      }
  }
  return viTriGiaTriNhoNhat;
}

// Ví dụ sử dụng
const mangSoThuc = [5.3, 2.7, 8.1, 1.9, 4.6];
const viTriGiaTriNhoNhat = timViTriGiaTriNhoNhat(mangSoThuc);
console.log(viTriGiaTriNhoNhat); // Kết quả: 3
