function findPowersOfThree(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    let exponent = Math.log(number) / Math.log(3);
    if (exponent === Math.floor(exponent)) {
      result.push(number);
    }
  }
  if (result.length === 0) {
    return 0;
  }
  return result;
}

let array = [1, 3, 9, 5, 27, 8, 6];
let result = findPowersOfThree(array);
console.log("Các giá trị có dạng 3^k là:", result);
