function grow(arr){
  let result = arr.reduce((current, next)=> current*next, 1);
  return result;
}