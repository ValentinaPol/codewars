function countConsonants(str) {
    str = str.toLowerCase();
    let uniq = '';
    let result = '';
    for (let i = 0; i < str.length; i++){
        if (uniq.includes(str[i]) === false){
            uniq += str[i];
        }
    }
    //return uniq.length;
    for (let i = 0; i < uniq.length; i++){
        for (let j = 0; j < str.length; j++){
            if (uniq[i] !== str[j] && (result.includes(str[i]) === false)){
                result += uniq[i];
            }
        }
    }
    return result.length;
}

//console.log(countConsonants("add"));
//console.log(countConsonants("Dad"));
//console.log(countConsonants("aeiou"));
//console.log(countConsonants("sillystring"));
//console.log(countConsonants("abcdefghijklmnopqrstuvwxyz"));
//console.log(countConsonants("Count my unique consonants!!"));