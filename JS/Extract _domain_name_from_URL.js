function domainName(url){
    let start;
    let end;
    let result;
    if(url.includes('http://') || url.includes('https://')){
        start = url.indexOf('/') + 2;
        end = url.indexOf('.');
        result = url.slice(start, end);
    }
    if (url.includes('www')){
        start = url.indexOf('.') + 1;
        end = url.indexOf('.', start + 1);
        result = url.slice(start, end);
    }
    if (!url.includes('http://') && !url.includes('https://') && !url.includes('www')) {
        start = 0;
        end = url.indexOf('.');
        result = url.slice(start, end);
    }
    return result;
}


console.log(domainName("http://github.com/carbonfive/raygun"));  //domain name = "github"

console.log(domainName("http://www.zombie-bites.com")); //domain name = "zombie-bites"

console.log(domainName("https://www.cnet.com")); // domain name = "cnet";

/* function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};*/  //Second case

/* function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
} */ // 3 case

/* function domainName(url){  
  return url.replace(/.+\/\/|www.|\..+/g, '')
} */    // 4 case

