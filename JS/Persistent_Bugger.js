function persistence(num) {
    let strFromNum = String(num);
    let count = 0;
    while (strFromNum.length > 1){
        let multipl = 1;
        for (let i = 0; i < strFromNum.length; i++){
            multipl *= +strFromNum[i];    
        }
        strFromNum = String(multipl);
        ++count;
    }
    return count;
}
    

console.log(persistence(39));
console.log(persistence(999));
console.log(persistence(4));

/*function persistence(num) {
    var times = 0;
    
    num = num.toString();
    
    while (num.length > 1) {
      times++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    
    return times;
}*/

/*const persistence = num => {
    return `${num}`.length > 1 
      ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
      : 0;
}*/

/*function persistence(num) {
    for (var i = 0; num > 9; i++) {
      num = num.toString().split('').reduce((t, c) => c * t);
    }
    return i;
} */
