/*function dirReduc(arr){
    let directions = ['north, south', 'south, north', 'NORTH, SOUTH', 'SOUTH, NORTH', 'east, west',
                      'west, east', 'EAST, WEST', 'WEST, EAST'];
    do {
      for (let i = 0; i < directions.length; i++){
        for (let j = 0; j < arr.length; j++)
        if (directions[i] == arr[0] + ', ' + arr[1]){
          arr.shift(arr[j]);
          arr.shift(arr[j]);
        }
      }  
    }while (directions.includes(arr[0] + ', ' + arr[1]));
    return arr;
}

console.log(dirReduc(["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH","WEST"]));*/