function generateHashtag (str) {
    let strResult = "#";
    if(!str.trim()) {
        return false;
    } else {
        let arrStr = str.trim().split(' ');
        for (let i = 0; i < arrStr.length; i++){
            if (arrStr[i] !== ''){
                arrStr[i] = arrStr[i].replace(arrStr[i][0], arrStr[i][0].toUpperCase());
            }    
        }
        strResult = strResult + arrStr.join('');
        return strResult.length > 140 ? false : strResult;
    }
}


console.log(generateHashtag(" Hello there thanks for trying my Kata"));
console.log(generateHashtag("  "));
console.log(generateHashtag("    Hello     World   "));