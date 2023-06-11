// bai 171: Hãy liệt kê các vị trí mà giá trị tại đó là giá trị tại đó là giá trị lớn nhất trong mảng 1 chiều các số thực

function question1(array1) {
  if (array1.length === 0) {
    return null;
  }
  let minValue = -Infinity;
  let arr = [];
  for (let i = 1; i < array1.length; i++) {
    if (array1[i] > minValue) {
      minValue = array1[i];
      arr = [i];
    } else if (array1[i] === minValue) {
      arr.push(i);
    }
  }
  return arr;
}
let array1 = [1.5, 2.7, 3.8, 4.2, 2.9, 5.1];
let result1 = question1(array1);
console.log("cau 171: vi tri co gia tri lon nhat la:", result1);

// bai 172: Hãy liệt kê các vị trí mà giá trị tại đó là số nguyên tố trong mảng 1 chiều các số nguyên

function question2(array2) {
  function calculator(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  if (array2.length === 0) {
    return null;
  }
  let arr = [];
  for (let i = 0; i < array2.length; i++) {
    if (calculator(array2[i])) {
      arr.push(i);
    }
  }
  return arr;
}
let array2 = [1, 4, 7, 9, 12, 17, 21, 23, 29, 30];
let result2 = question2(array2);
console.log("cau 172: cac vi tri co so nguyen to la:", result2);

// bai 173: Hãy liệt kê các vị trí mà giá trị tại đó là số chính phương trong mảng 1 chiều các số nguyên

function question3(array3) {
  function calculator(number) {
    let squareRoot = Math.sqrt(number);
    return squareRoot === Math.floor(squareRoot);
  }
  let arr = [];
  for (let i = 0; i < array3.length; i++) {
    if (calculator(array3[i])) {
      arr.push(i);
    }
  }
  return arr;
}
let array3 = [1, 4, 7, 9, 12, 17, 21, 23, 29, 30];
let result3 = question3(array3);
console.log("cau 173: cac vi tri co so chinh phuong la", result3);

// bai 174: Hãy liệt kê các vị trí trong mảng 1 chiều các số thực mà giá trị tại đó bằng giá trị âm đầu tiên trong mảng

function question4(array4) {
  if (array4.length === 0) {
    return null;
  }
  let arr = [];
  let minValue = null;
  for (let i = 0; i < array4.length; i++) {
    if (array4[i] < 0) {
      minValue = array4[i];
      break;
    }
  }
  if (minValue === null) {
    return arr;
  }
  for (let i = 0; i < array4.length; i++) {
    if (array4[i] === minValue) {
      arr.push(i);
    }
  }
  return arr;
}

let array4 = [-3.8, 2.7, -3.8, 4.2, -3.8, 5.1];
let result4 = question4(array4);
console.log(
  "cau 174: cac vi tri co gia tri am bang gia tri dau tien trong mang la:",
  result4
);

//bai 175: Hãy liệt kê các vị trí mà giá trị tại các vị trí đó bằng giá trị dương nhỏ nhất trong mảng 1 chiều các số thực

function question5(array) {
  let smallestPositive = Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] < smallestPositive) {
      smallestPositive = array[i];
    }
  }
  return smallestPositive;
}

function findPositions(array) {
  let smallestPositive = question5(array);
  let positions = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === smallestPositive) {
      positions.push(i);
    }
  }
  return positions;
}
let array5 = [1.5, 2.7, 0.8, 4.2, 0.8, 5.1];
let result5 = findPositions(array5);
console.log(
  "cau 175: cac vi tri co gai tri duong nho nhat trong mang",
  result5
);

// bai 176: Hãy liệt kê các vị trí chẵn lớn nhất trong mảng 1 chiều các số nguyên

function question6(array) {
  let maxEven = Number.NEGATIVE_INFINITY;
  let positions = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0 && array[i] >= maxEven) {
      if (array[i] > maxEven) {
        positions = [];
        maxEven = array[i];
      }
      positions.push(i);
    }
  }

  return positions;
}

let array6 = [1, 4, -4, 9, 12, 17, 21, 23, 29, 10, 30];
let result6 = question6(array6);
console.log("cau 176: cac vi tri chan lon nhat trong mang la:", result6);

// bai 177: Hãy liệt kê các giá trị trong mảng 1 chiều các số nguyên có chữ số đầu tiên là chữ số lẻ

function question7(array7) {
  if (array7.length === 0) {
    return null;
  }
  let arr = [];
  for (let i = 0; i < array7.length; i++) {
    if (array7[i] % 2 !== 0) {
      arr.push(i);
    }
  }
  return arr;
}
let array7 = [1, 4, -4, 9, 12, 17, 21, 23, 29, 10, 30];
let result7 = question7(array7);
console.log("cau 177: cac vi tri chan le trong mang la:", result7);

// bai 178: Hãy liệt kê các giá trị có toàn chữ số lẻ trong mảng 1 chiều các số nguyên

function question8(array8) {
  if (array8.length === 0) {
    return null;
  }

  let arr = [];
  for (let i = 0; i < array8.length; i++) {
    let numStr = Math.abs(array8[i]).toString();
    let odd = true;
    for (let j = 0; j < numStr.length; j++) {
      if (parseInt(numStr[j]) % 2 === 0) {
        odd = false;
        break;
      }
    }
    if (odd) {
      arr.push(array8[i]);
    }
  }
  return arr;
}
let array8 = [123, 456, 789, 1357, 3791, 2468];
let result8 = question8(array8);
console.log("cau 178: cac gia tri co toan chu so le la:", result8);

// bai 179: Hãy liệt kê các giá trị cực đại trong mảng 1 chiều các số thực. Một phần tử được gọi là cực đại khi lớn hơn các phần tử lân cận

function question9(array9) {
  if (array9.length === 0) {
    return null;
  }
  let arr = [];
  for (let i = 0; i < array9.length; i++) {
    if (array9[i] > array9[i + 1] && array9[i] > array9[i - 1]) {
      arr.push(array9[i]);
    }
  }
  return arr;
}
let array9 = [1, 3, 2, 5, 4, 7, 6];
let result9 = question9(array9);
console.log("cau 179: cac gia tri cuc dai la:", result9);

// bai 180: Hãy liệt kê các  giá trị trong mảng 1 chiều các số nguyên có chữ số đầu tiên là số chẵn

function question10(array10) {
  if (array10.length === 0) {
    return null;
  }
  let arr = [];
  for (let i = 0; i < array10.length; i++) {
    let numberString = Math.abs(array10[i]).toString();
    if (parseInt(numberString[0]) % 2 === 0) {
      arr.push(array10[i]);
    }
  }
  return arr;
}

let array10 = [123, 456, 2789, 1357, 3791, 2468];
let result10 = question10(array10);
console.log("cau 180: cac gia tri co so dau tien la so chan la:", result10);
