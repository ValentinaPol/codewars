function rgb(r, g, b){
    r = r < 0 ? r = 0 : r > 255 ? r = 255 : r;
    g = g < 0 ? g = 0 : g > 255 ? g = 255 : g;
    b = b < 0 ? b = 0 : b > 255 ? b = 255 : b;
    
    r = r.toString(16).length == 1 ? String(0) + r.toString(16) : r.toString(16);
    g = g.toString(16).length == 1 ? String(0) + g.toString(16) : g.toString(16);
    b = b.toString(16).length == 1 ? String(0) + b.toString(16) : b.toString(16);

    let hexNumber = (r + g + b).toUpperCase();

    return hexNumber;
}

console.log(rgb(255, 255, 255));

console.log(rgb(255, 255, 300));

console.log(rgb(0,0,0));

console.log(rgb(148, 0, 211));

/*function rgb(r, g, b){
    return [r,g,b].map(function(x) {
      return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
    }).join('').toUpperCase();
}*/ // Second case

/*function rgb(r, g, b){
    return [r,g,b].map(function(x) {
      return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
    }).join('').toUpperCase();
}*/