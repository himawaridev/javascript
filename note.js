function tínhDãy(x, n) {
    let sum = 0;
    let factorial = 1;
    
    for (let i = 1; i <= n; i++) {
        factorial *= i;
        let term = (-1) ** i * (x ** i) / factorial;
        sum += term;
    }
    
    console.log("Giá trị của dãy là:", sum);
}

tínhDãy(2, 3);
