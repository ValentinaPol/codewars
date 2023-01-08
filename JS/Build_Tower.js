function towerBuilder(nFloors) {
    let arr = ['*'];
    let contentItem = '*';

    for (let i = 1; i < nFloors; i++){
        arr = arr.map((item) => {
            return ' ' + item + ' ';
        })
        contentItem = contentItem + '**'
        arr.push(contentItem);
    }

    return arr;    
}


console.log(towerBuilder(3));

