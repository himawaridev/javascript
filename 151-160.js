/* bai 151: Cho mảng 1 chiều các số thực. Hãy viết hàm tìm một vị trí trong mảng thỏa 2 điều kiện: 
có 2 giá trị lân cận và giá trị tại đó bằng tích 2 giá trị lân cận. 
Nếu mảng không tồn tại giá trị như vậy thì trả về giá trị -1*/

function question1(array1) {
  for (let i = 1; i < array1.length - 1; i++) {
    let prevValue = array1[i - 1];
    let nextValue = array1[i + 1];
    let currentValue = array1[i];

    if (currentValue === prevValue * nextValue) {
      return i;
    }
  }

  return -1;
}
let array1 = [1, 3, 2, 6, 12, 8];
let result1 = question1(array1);
console.log("cau 151: gia tri thoa man dieu kien la:", result1);

// bai 152: Tìm số chính phương đầu tiên trong mảng 1 chiều các số nguyên

function question2(array2) {
  for (let i = 0; i < array2.length; i++) {
    if (Math.sqrt(array2[i]) % 1 === 0) {
      return array2[i];
    }
  }
  return -1;
}
let array2 = [2, 5, 9, 16, 25, 36, 49, 64];
let result2 = question2(array2);
console.log("cau 152: so chinh phuong dau tien la:", result2);

// bai 153: Cho mảng 1 chiều các số nguyên. Hãy tìm giá trị đầu tiên thỏa mãn tính chất số gánh
// bai 154: Cho mảng 1 chiều các số nguyên. Hãy tìm giá trị đầu tiên có chữ số đầu tiên là chữ số lẻ

function question4(array4) {
  if (array1.length === 0) {
    return null;
  }
  for (let i = 0; i < array4.length; i++) {
    if (array4[i] % 2 !== 0) {
      return array4[i];
    }
  }
}
console.log(
  "cau 154: gia tri co chu so le dau tien la:",
  question4([2, 5, 9, 16, 25, 36, 49, 64])
);

// bai 155: Cho mảng 1 chiều các số nguyên. Hãy viết hàm tìm giá trị đầu tiên trong mảng có dạng 2^k. Nếu mảng không có giá trị dạng 2k thì hàm sẽ trả về 0

function question5(array5) {
  for (let i = 0; i < array5.length; i++) {
    let currentNumber = array5[i];
    if (currentNumber > 0 && (currentNumber & (currentNumber - 1)) === 0) {
      return currentNumber;
    }
  }
  return 0;
}
let array5 = [1, 3, 4, 8, 10, 16, 20];
let result5 = question5(array5);
console.log("cau 155: gia tri dau tien trong mang co dang 2^k", result5);

// bai 156: Hãy tìm giá trị thỏa điều kiện toàn chữ số lẻ và là giá trị lớn nhất thỏa điều kiện ấy trong mảng 1 chiều các số nguyên. Nếu mảng không có giá trị thỏa điều kiện trên thì trả về 0

function question6(array6) {
  if (array6.length === 0) {
    return null;
  }
  let minValue = 0;
  for (let i = 0; i < array6.length; i++) {
    if (array6[i] > minValue && array6[i] % 2 !== 0) {
      minValue = array6[i];
    }
  }
  return minValue;
}
console.log(
  "cau 156: thoa man dieu kien toan so le va la gia tri lon nhat",
  question6([1, 3, 4, 8, 10, 16, 17, 20])
);

// bai 157: Cho mảng 1 chiều các số nguyên. Hãy viết hàm tìm giá trị lớn nhất trong mảng có dạng 5^k. Nếu mảng khong tồn tại giá trị 5^k thì hàm sẽ trả về 0
// bai 158: (*): Cho mảng 1 chiều các số nguyên. Hãy viết hàm tìm số chẵn nhỏ nhất lớn hơn mọi giá trị có trong mảng

function question8(array8) {
  let maxValue = -Infinity;
  for (let i = 0; i < array8.length; i++) {
    if (array8[i] % 2 === 0 && array8[i] > maxValue) {
      maxValue = array8[i];
    }
  }

  let smallNumber = Infinity;
  for (let i = 0; i < array8.length; i++) {
    if (
      array8[i] % 2 === 0 &&
      array8[i] > maxValue &&
      array8[i] < smallNumber
    ) {
      smallNumber = array8[i];
    }
  }

  return smallNumber;
}
let array8 = [1, 3, 5, 7, 10, 2, 4, 6];
let result8 = question8(array8);
console.log(
  "cau 158: so chan nho nhat lon hon moi gia tri co trong mang la:",
  result8
);

// bai 159: Cho mảng 1 chiều các số nguyên. Hãy viết hàm tìm số nguyên tố nhỏ nhất lớn hơn mọi giá trị có trong mảng

function calculator(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    //
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
function question9(array9) {
  if (array9.length === 0) {
    return null;
  }
  let maxValue = Infinity;
  for (let i = 0; i < array9.length; i++) {
    if (calculator(i)) {
      maxValue = Math.min(maxValue, array9[i]);
    }
  }
  let candidate = maxValue + 1;
  while (!calculator(candidate)) {
    candidate++;
  }

  return candidate;
}
let array9 = [1, 3, 5, 7, 10, 2, 4, 6];
let result9 = question9(array9);
console.log(
  "Câu 159: so nguyen to nho nhat lon hon moi gia tri co trong mang",
  result9
);

// bai 160: Cho mảng 1 chiều các số nguyên. Hãy viết hàm tìm ước chung lớn nhất của tất cả các phần tử trong mảng

function question10(array) {
  if (array.length === 0) {
    return null;
  }
  function gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  }

  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    result = gcd(result, array[i]);
  }

  return result;
}
let array = [10, 20, 30, 40, 50];
let result = question10(array);
console.log("cau 160: uoc chung lon nhat cua cac so trong mang la:", result);
