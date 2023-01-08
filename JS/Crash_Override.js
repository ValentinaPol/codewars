function aliasGen(str1, str2){
    let nameResult = '';
    let surnameResult = '';
    for (let key in firstName){
      if (key === str1[0].toUpperCase()){
        nameResult = firstName[key];
      }
    }
    for (let key in surname){
      if (key === str2[0].toUpperCase()){
        surnameResult = surname[key];
      } 
    }
    if (nameResult && surnameResult){
        return nameResult + ' ' + surnameResult; 
    } else {
        return 'Your name must start with a letter from A - Z.';
    }
}

var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache'}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst'}

console.log(aliasGen('Arry', 'Brentwood'));
