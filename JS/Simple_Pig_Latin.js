function pigIt(str){
    arrStr = str.split(' ');
    let result = arrStr.map(function(item){
        if(item === '!' || item === '?'){
            return item;
        }else{
            return item.slice(1) + item[0] + 'ay';
        } 
    })
    return result.join(' ');   
}

console.log(pigIt('Pig latin is cool'));

console.log(pigIt('Hello world !'));


/*function pigIt(str) {
    return str.replace(/\w+/g, (w) => {
      return w.slice(1) + w[0] + 'ay';
    });
}*/ //Second case