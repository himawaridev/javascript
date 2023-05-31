function calculator2(number) {
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

function question8(array) {
    if (array.length === 0) {
        return -1;
    }
    let maxValue = -1;
    for (let i = 0; i < array.length; i++) {
        if (calculator2(array[i])) {
            maxValue = array[i];
        }
    }
    return maxValue;
}

console.log('cau 138: so hoan thien cuoi cung trong mang la:', question8([4, 6, 8, 9, 10, 11, 12]));
