function getMiddle(s){
  let result = "";
  let middle = Math.floor(s.length / 2);

  if (s.length === 1){
    result = s;
  } else if (s.length % 2 === 0){
    result = s[middle - 1] + s[middle]; 
  } else {
    result += s[middle]; 
  }
  return result;
}

console.log(getMiddle("test"));

console.log(getMiddle("testing"));

console.log(getMiddle("middle"));

console.log(getMiddle("A"));

/*function getMiddle(s){
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}*/ //Second case