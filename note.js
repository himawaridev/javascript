function calculateDiv6(number) {
    let sum = 0;
    let sum1 = 0
    let value = 1;
    for (let i = 0; i === number; i++) {
        sum += value ^ (i / factorial(i));
    }
    console.log('cau 17:', sum);
}
calculateDiv6(4);

function listDivisors(n) {
    let divisors = [];
    for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) {
            divisors.push(i);
            if (i !== n / i) {
                divisors.push(n / i);
            }
        }
    }
    divisors.sort(function (a, b) {
        return a - b;
    });
    console.log(divisors)
}

function findLargestOddDivisor(n) {
    let largestOddDivisor = 1;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0 && i % 2 !== 0) {
            largestOddDivisor = i;
        }
    }
    return largestOddDivisor;
}

console.log(findLargestOddDivisor(100)); // output: 25

function calculateDiv9(number) {
    let maxOddDivisor = 1;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0 && i % 2 !== 0) {
            if (i > maxOddDivisor) {
                maxOddDivisor = i;
            }
        }
    }
    console.log('Uoc so le lon nhat cua', number, 'la:', maxOddDivisor);
}

calculateDiv9(12); // Uoc so le lon nhat cua 12 la: 3


function calculateS(n) {
    if (n === 1) {
      return Math.sqrt(2);
    } else {
      return Math.sqrt(2 + calculateS(n - 1));
    }
  }
  
  // Tính giá trị của S(5)
  console.log(calculateS(5));
  
