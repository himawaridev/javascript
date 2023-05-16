function question(number) {
    let sum = 0;
    let numberString = number.toString();
    for (let i = 0; i < numberString.length; i++) {
        sum += parseInt(numberString[i]);
    }
    console.log('cau 43: ', sum);
}
question(13);