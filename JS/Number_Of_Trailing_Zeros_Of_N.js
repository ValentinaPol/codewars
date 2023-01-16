function zeros(n) {
    let multy = 1;
    let countZero = 0;
    for (let i = 2; i <= n; i++){
        multy *= i;
    }
    let multyString = String(multy);
    for (let i = multyString.length - 1 ; i >= 0; i--){
        if (multyString[i] === '0') {
            countZero += 1;
        } else {
            return countZero;
        }
    } 
    return countZero; 
    
}

console.log(zeros(6));
console.log(zeros(12));
console.log(zeros(30)); // 2.6525285981219103e+32   
