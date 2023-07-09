// bai 291: Tìm dãy con toàn dương dài nhất


function question1(array) {
    if (array.length === 0) {
        return [];
    }
    let maxLength = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            maxLength.push(array[i]);
        }
    }
    return maxLength;
} 
console.log('cau 291: day con toan duong lon nhat:  ', question1([1, -2, 3, 4, -5, 6, -7, 8, 9]));


// bai 292: Cho mảng a, số nguyên M. Tìm 1 mảng con sao cho tổng các phần tử bằng M

function question2(value, M) {
    if (value.length === 0) {
        return [];
    }
    function calculator(array) {
        let newArray = []; 
        for (let start = 0; start < array.length; start++) {
            for (let end = start + 1; end <= array.length; end++) {
                let sub = array.slice(start, end)
                newArray.push(sub);
            }
        }
        return newArray;
    }
    let arraySub = calculator(value);
    let sum = 0;
    let newArray = [];
    for (let i = 0; i < arraySub.length; i++) {
        sum = arraySub[i].reduce((a, b) => a + b, 0)
        if (sum === M) {
            newArray.push(arraySub[i]);
        }
    }
    return newArray;
}

console.log('cau 292: mang con sao cho tong phan tu bang M  ', question2([1, 2, 3, 4], 3));


// bai 293: Tìm dãy con toàn dương có tổng lớn nhất

function question3(value) {
    if (value.length === 0) {
        return [];
    }
    let newArray = [];
    function calculator(start, array) {
        newArray.push(array.slice());   // them phan tu vao mang hien tai
        for (let i = start; i < value.length; i++) {
            array.push(value[i]);
            calculator(i + 1, array);
            array.pop();        
        }
    }
    calculator(0, []);
    let sum = 0;
    for(let i = 0; i < newArray.length; i++) {
        if (newArray[i].length) {
            sum += newArray[i];
        }
    }
    return sum;
}

console.log("Bài 293: day con toan duong co tong lon nhat", question3([1, 2, 3]));


// bai 294: Tìm mảng con có tổng lớn nhất

// function question4(array) {
//     if (array.length === 0) {
//         return [];
//     }
//     let newArray = [];
//     function calculator(start, value) {
//         newArray.push(value.slice());      // tao mang moi tu mang hien tai
//         for (let i = start; i < array.length; i++) {
//             value.push(array[i]);   // dua cac phan tu vao value
//             calculator(i + 1, value); // thay dooi gia tri start bang i + 1
//             value.pop();
//         }
//     }
//     calculator(0, []);
//     let subArray = calculator(array);
    
// }
// console.log("Bài 294: day con toan duong co tong lon nhat", question4([1, 2, 3]));


// bai 295: Tạo mảng b chỉ chứa giá trị lẻ từ mảng a

function question5(arrayA) {
    if (arrayA.length === 0) {
        return [];
    }
    let arrayB = [];
    for (let i = 0; i < arrayA.length; i++) {
        if (arrayA[i] % 2 !== 0) {
            arrayB.push(arrayA[i]);
        }
    }
    return arrayB;
}

console.log("bai 295:  tao mang b chua gia tri le tu mang a", question5([1, 2, 3, 4 , 5]));


// bai 296: Tạo mảng b chỉ chứa giá trị âm từ mảng a

function question6(arrayA) {
    if (arrayA.length === 0) {
        return [];
    }
    let arrayB = [];
    for (let i = 0; i < arrayA.length; i++) {
        if (arrayA[i] < 0) {
            arrayB.push(arrayA[i]);
        }
    }
    return arrayB;
}

console.log("bai 296: tao mang b chua gia tri am tu mang a", question6([1, 2, -3, 4 , -5]));


// bai 297: Tạo mảng b sao cho b[i] = tổng các phần tử lân cận với a[i] trong mảng a

function question7(arrayA) {
    let arrayB = [];
    let sum = 0;
    for (let i = 0; i < arrayA.length; i++) {
        if (i > 0) {
            sum += arrayA[i - 1];      
        }
        if (i < arrayA.length - 1) {
            sum += arrayA[i + 1];
        }
        arrayB.push(sum);
    }
    return arrayB;
}

console.log("bai 297: mang b chua so nguyen to tu mang a", question7([1, 2, 3, 4, 5]));


// bai 298: Tạo mảng b chỉ chứa số nguyên tố từ mảng a

function question8(arrayA) {
    if (arrayA.length === 0) {
        return [];
    }
    let arrayB = [];
    function calculator(number) {
        if (number < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
    for (let i = 0; i < arrayA.length; i++) {
        if (calculator(arrayA[i])) {
            arrayB.push(arrayA[i]);
        }
    }
    return arrayB;
}

console.log("bai 298: mang b chua so nguyen to tu mang a", question8([1, 2, 3, 4, 5]));

// bai 299 + 230: Viết hàm nhập xuất ma trận số nguyên

function question1() {
    console.log('Please enter something here: ')
    process.stdin.on('readable', () => {
        let chunk;
        // Use a loop to make sure we read all available data.
        while ((chunk = process.stdin.read()) !== null) {
            console.log("you type: ", chunk.toString());
            // process.stdout.write(`data: ${chunk}`);
        }
       });
    // process.stdin.on('data', data => {
    //     console.log("you type: ", data.toString());
    //     process.exit();
    // });
}