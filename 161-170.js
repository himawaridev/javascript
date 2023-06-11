// bai 161: Cho mảng 1 chiều các số nguyên. Hãy viết hàm tìm bội chung nhỏ nhất của tất cả các phần tử trong

function question1(array) {
  if (array.length === 0) {
    return null;
  }

  function gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    result = lcm(result, array[i]);
  }

  return result;
}
let array = [3, 6, 9, 12, 15];
let result = question1(array);
console.log("cau 161: boi chung nho nhat cua cac so trong mang la", result);

// bai 162: Cho mảng 1 chiều các số nguyên. Hãy  viết hàm tìm chữ số xuất hiện ít nhất trong mảng

function question2(array2) {
  if (array2.length === 0) {
    return null;
  }
}

// bai 163: Cho mảng số thực có nhiều hơn 2 giá trị và các giá trị trong mảng khác nhau từng đôi một. Hãy viết hàm liệt kê tất cả các cặp giá trị (a, b) trong mảng thỏa điều kiện a <= b

function question3(array3) {
  for (let i = 0; i < array3.length; i++) {
    for (let j = 0; j < array3.length; j++) {
      if (array3[j] >= array3[i]) {
        console.log(`cau 163: (${array[i]}, ${array[j]})`);
      }
    }
  }
}
question3([1.5, 2.7, 3.8, 4.2, 5.1]);

// bai 164: Cho mảng số thực có nhiều hơn 2 giá trị và các giá trị trong mảng khác nhau từng đôi một. Hãy viết hàm tìm 2 giá trị gần nhau nhất trong mảng (Lưu ý: Mảng có các giá trị khác nhau từng đôi một còn có tên là mảng phân biệt)

function question4(array) {
  if (array.length < 2) {
    return "Mảng phải có ít nhất 2 giá trị";
  }

  let minDistance = Math.abs(array[1] - array[0]);
  let closestPair = [array[0], array[1]];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let distance = Math.abs(array[j] - array[i]);

      if (distance < minDistance) {
        minDistance = distance;
        closestPair = [array[i], array[j]];
      }
    }
  }

  return closestPair;
}

let array1 = [1.5, 2.7, 3.8, 4.2, 2.9, 5.1];
let closestValues = question4(array);
console.log("cau 164: hai gia tri gan nhau nhat tron mang", closestValues);

// bai 165: Hãy liệt kê các số âm trong mảng 1 chiều các số thực

function question5(array) {
  if (array.length === 0) {
    return null;
  }
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      arr.push(array[i]);
    }
  }
  return arr;
}
let array2 = [1.5, -2.7, 3.8, -4.2, 2.9, -5.1];
let arr = question5(array2);
console.log("cau 165: cac so am trong mang la:", arr);

// bai 166: Hãy liệt kê các số trong mảng 1 chiều các số thực thuộc đoạn [x, y] cho trước

function question6(array, x, y) {
  if (array.length === 0) {
    return null;
  }
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= x && array[i] <= y) {
      arr.push(array[i]);
    }
  }
  return arr;
}
let array3 = [1.5, 2.7, 3.8, 4.2, 2.9, 5.1];
let x = 2;
let y = 4;
let arr1 = question6(array, x, y);
console.log("cau 166: cac so trong doan: [", x, ",", y, "] là:", arr1);

// bai 167: Hãy liệt kê các số chẵn trong mảng 1 chiều các số nguyên thuộc đoạn [x, y] cho trước (x, y là các số nguyên)

function question7(array7, x1, y1) {
  if (array7.length === 0) {
    return null;
  }

  let arr7 = [];

  for (let i = 0; i < array7.length; i++) {
    if (array7[i] >= x1 && array7[i] <= y1 && array7[i] % 2 === 0) {
      arr7.push(array7[i]);
    }
  }
  return arr7;
}
let array7 = [1, 4, -4, 8, 3, 9, 10, 6, -2, -20];
let x1 = -2;
let y1 = 6;
let arr7 = question7(array7, x1, y1);
console.log("cau 167: so chan thuoc doan: [", x1, ",", y1, "] la:", arr7);

// bai 168: Hãy liệt kê các giá trị trong mảng mà thỏa điều kiện lớn hơn giá trị tuyệt đối của giá trị đứng liền sau nó

function question8(array8) {
  if (array8.length === 0) {
    return null;
  }

  let arr = [];

  for (let i = 0; i < array8.length - 1; i++) {
    if (array8[i] > Math.abs(array8[i + 1])) {
      arr.push(array8[i]);
    }
  }

  return arr;
}
let array8 = [1, 4, -4, 8, 3, 9, 10, 6, -2, -20];
let arr8 = question8(array8);
console.log("cau 168: cac gia tri thoa man dieu kien la:", arr8);

// bai 169: Cho mảng 1 chiều các số nguyên. Hãy viết hàm liệt kê các giá trị chẵn có ít nhất 1 lân cận cũng là giá trị chẵn

function question9(array9) {
  if (array9.length === 0) {
    return null;
  }
  let arr = [];
  for (let i = 0; i < array9.length; i++) {
    if (
      array9[i] % 2 === 0 &&
      (array9[i + 1] % 2 === 0 || array9[i - 1] % 2 === 0)
    ) {
      arr.push(array9[i]);
    }
  }
  return arr;
}
let array9 = [1, 4, -4, 9, 3, 8, 10, 6, -2, -20];
let arr9 = question9(array9);
console.log("cau 169: cac gia tri thoa man dieu kien la:", arr9);

// bai 170:  Cho mảng 1 chiều các số thực. Hãy viết hàm liệt kê tất cả các giá trị trong mảng có ít nhất 1 lận cận trái dấu với nó

function question10(array10) {
  if (array10.length === 0) {
    return null;
  }
  let arr = [];
  for (let i = 0; i < array10.length; i++) {
    if (
      (array10[i] > 0 && (array10[i + 1] < 0 || array10[i - 1] < 0)) ||
      (array10[i] < 0 && (array10[i + 1] > 0 || array10[i - 1] > 0)) ||
      array10[i] * array10[i - 1] < 0 || array10[i] * array10[i + 1] < 0
    ) {
      arr.push(array10[i]);
    }
  }
  return arr;
}
let array10 = [1, 4, -4, 9, 3, 8, 10, 6, -2, -20];
let arr10 = question10(array10);
console.log("cau 170: cac gia tri thoa man dieu kien la:", arr10);
