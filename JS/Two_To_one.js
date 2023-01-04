function longest(s1, s2) {
    let commonString = (s1 + s2).split('').sort().join('');
    let stringResult = "";
    console.log(commonString);
    for (let i = 0; i < commonString.length; i++){
        if (commonString[i] !== commonString[i + 1]){
            stringResult += commonString[i];   
        } 
    }
    
    return stringResult;
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));

/*function longest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
}*/ //Second case