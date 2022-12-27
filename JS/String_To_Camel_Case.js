function toCamelCase(str){
    let strResult = '';
    for (let i = 0; i < str.length; i++){
        if (str[i] === '-' || str[i] === '_'){
            strResult += str[i+1].toUpperCase();
            i++; 
        } else {
            strResult += str[i];
         }
    }
    
    return strResult;
  
}

console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("the-stealth-warrior"));