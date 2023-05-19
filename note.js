function calculateSeries(x, n) {
    let sum = 0;
    let count = 1;
    let factorial = 1;

    for (let i = 0; i <= n; i++) {
        factorial *= (2 * i + 1);
        count = Math.pow(-1, i + 1) * Math.pow(x, 2 * i + 1) / factorial;
        sum += count;
    }

    console.log('S(x, n) =', sum);
}

calculateSeries(2, 3);
