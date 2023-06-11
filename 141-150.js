// bai 141: Hãy tìm số hoàn thiện nhỏ nhất trong mảng 1 chiều các số nguyên. Nếu mảng không có số hoàn thiện thì trả về -1

function calculator1(number) {
  let sum = 0;
  for (let i = 0; i <= Math.floor(number / 2); i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  return sum;
}
function question1(array) {
  if (array.length === 0) {
    return -1;
  }
  let minValue = -1;
  for (let i = 0; i < array.length; i++) {
    if (calculator1(array[i])) {
      if (minValue === -1 || array[i] < minValue) {
        minValue = array[i];
      }
    }
  }
  return minValue;
}
console.log(
  "cau 141: so hoan thien nho nhat la:",
  question1([6, 8, 12, 28, 30, 36])
);

// bai 142: Hãy tìm giá trị chẵn nhỏ nhất trong mảng 1 chiều các số nguyên. Nếu mảng không có số chẵn thì trả về -1

function question2(array) {
  if (array.length === 0) {
    return -1;
  }
  let minValue = Infinity;
  let condition = false;
  for (let i = 0; i <= array.length; i++) {
    if (array[i] % 2 === 0 && array[i] < minValue) {
      minValue = array[i];
      condition = true;
    }
  }
  if (condition) {
    return minValue;
  } else {
    return -1;
  }
}
console.log(
  "cau 142: so chan nho nhat la:",
  question2([6, 8, -2, 12, 28, -30, 36])
);

// bai 143: Hãy tìm vị trí giá trị âm nhỏ nhất trong mảng các số thực. Nếu mảng không có số âm thì trả về -1

function question3(array) {
  let minValue = 0;
  let condition = false;
  for (let i = 0; i <= array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
      condition = true;
    }
  }
  if (condition) {
    return minValue;
  } else {
    return -1;
  }
}
console.log(
  "cau 143: so chan nho nhat la:",
  question3([1.5, 2.7, -3.2, 4.9, -5.1, 6.4, 7.2, -8.3, 9.6, 10.0])
);

// bai 144: Hãy tìm giá trị trong mảng các số thực xa giá trị x nhất

function question4(array, x) {
  if (array.length === 0) {
    return null;
  }
  let arr = array[0];
  let farthestDistance = Math.abs(array[0] - x);

  for (let i = 1; i < array.length; i++) {
    let distance = Math.abs(array[i] - x);
    if (distance > farthestDistance) {
      farthestDistance = distance;
      arr = array[i];
    }
  }
  return arr;
}
let number = [1.5, -11, 2.7, -3.2, 4.9, -5.1, 6.4, 7.2, -8.3, 9.6, 50.0];
let x = 0;
let arrValue = question4(number, x);
console.log("cau 144: Giá trị xa giá trị", x, "nhất trong mảng là:", arrValue);

// bai 145: Hãy tìm giá trị trong mảng các số thực gần giá trị x nhất

function question5(array, x) {
  if (array.length === 0) {
    return null;
  }
  let arr = array[0];
  let closestDistance = Math.abs(array[0] - x);

  for (let i = 1; i < array.length; i++) {
    let distance = Math.abs(array[i] - x);
    if (distance < closestDistance) {
      closestDistance = distance;
      arr = array[i];
    }
  }
  return arr;
}
let number1 = [1.5, -11, 2.7, -3.2, 4.9, -5.1, 6.4, 7.2, -8.3, 9.6, 50.0];
let x1 = 0;
let arrValue1 = question5(number, x);
console.log(
  "cau 145: Giá trị xa giá trị",
  x1,
  "nhất trong mảng là:",
  arrValue1
);

// bai 146: Cho mảng 1 chiều các số thực, hãy tìm đoạn [a, b] sao cho đoạn này chứa tất cả các giá trị trong mảng

function question6(array) {
  if (array.length === 0) {
    return null;
  }
  let minValue = array[0];
  let maxValue = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    }
    if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  return [minValue, maxValue];
}
let numbers = [1.5, -11, 2.7, -3.2, 4.9, -5.1, 6.4, 7.2, -8.3, 9.6, 50.0];
let range = question6(numbers);
console.log("Bài 146: Đoạn chứa tất cả các giá trị trong mảng:", range);

// bai 147: Cho mảng 1 chiều các số thực, hãy tìm giá trị x sao cho đoạn [-x, x] chứa tất cả các giá trị trong mảng

function question7(array) {
  if (array.length === 0) {
    return null;
  }
  let minValue = array[0];
  let maxValue = array[0];
  for (let i = 1; i <= array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    }
    if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  let x = Math.max(Math.abs(maxValue), Math.abs(minValue));
  return [-x, x];
}
let array = [1.5, -2.8, 3.6, -4.2, 5.1];
let range1 = question7(array);
console.log("cau 147: ", range1);

// bai 148: Cho mảng 1 chiều các số thực, hãy tìm giá trị đầu tiên lớn hơn giá trị 2003. Nếu mảng không có giá trị thỏa điều kiện trên thì trả về  -1

function question8(array) {
  if (array.length === 0) {
    return null;
  }
  let value = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 2003) {
      value = array[i];
      break;
    }
  }
  return value;
}
console.log(
  "cau 148: gia tri dau tien lon hon 2003 la:",
  question8([1.5, -2.8, 3.6, -4.2, 2004.5, 100.12])
);

// bai 149: Cho mảng 1 chiều các số thực, hãy tìm giá trị âm cuối cùng lớn hơn giá trị -1. Nếu mảng không có giá trị thỏa điều kiện trên thì trả về -1

function question9(array) {
  if (array.length === 0) {
    return -1;
  }
  let maxValue = -1;
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] > maxValue && array[i] < 0) {
      maxValue = array[i];
      break;
    }
  }
  return maxValue;
}
let array1 = [1, -2, 3, 4, -0.5, -3, -1.5];
let lastValue = question9(array1);
console.log("cau 149: gia tri am cuoi cung lon hon -1 la:", lastValue);

// bai 150: Cho mảng 1 chiều các số nguyên, hãy tìm giá trị đầu tiên nằm trong khoảng [x, y] cho trước. Nếu mảng không có giá trị thỏa điều kiện trên thì trả về -1

function question10(array2, x2, y2) {
  if (array2 === 0) {
    return -1;
  }
  let value;
  for (let i = 0; i < array2.length; i++) {
    value = array2[i];
    if (value >= x2 && value <= y2) {
      return value;
    }
  }
  return -1;
}
let array2 = [1, 3, 5, 7, 9];
let x2 = 4;
let y2 = 8;
let result = question9(array2, x2, y2);
console.log('cau 150: gia tri dau tien trong mang x,y la:',result);

