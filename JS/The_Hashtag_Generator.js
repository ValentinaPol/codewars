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

/*function generateHashtag (str) {
    if(!str || str.length < 1) return false;
    
    var r = '#' + str.split(' ').map(function(el) {
      return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
    }).join('');
    return r.length > 140?false:r;
}*/

/*function generateHashtag (str) {

    var hashtag = str.split(' ').reduce(function(tag, word) {
      return tag + word.charAt(0).toUpperCase() + word.substring(1);
    }, '#');
    
    return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
}*/