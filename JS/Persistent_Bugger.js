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
