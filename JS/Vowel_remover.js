function shortcut (string) {
    let stringResult = '';
    for (let i = 0; i < string.length; i++){
      if(string[i] !== 'a' && string[i] !== 'e' && string[i] !== 'i' && string[i] !== 'o' && string[i] !== 'u'){
        stringResult += string[i];
      }
    }
    return stringResult;
}