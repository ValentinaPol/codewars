function getHints(answer, guess) {
    let result = {
        black: 0,
        white: 0
    };
    let foundIndex = [];
    for (let i = 0; i < answer.length; i++){
        if (answer[i] === guess[i]){
            result.black += 1; 
            foundIndex.push(i);
        }    
    }
    for (let i = 0; i < answer.length; i++){
        for (let j = 0; j < guess.length; j++){
            if (answer[i] === guess[j] && !foundIndex.includes(j)){
                result.white += 1;
                foundIndex.push(j);
                break;
            } 
        }
    }
    return result;
}
//[1, 2, 3, 4]
//[1, 1, 1, 1]

console.log(getHints([1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 3, 3, 3], [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));

// console.log(getHints([1, 2, 3, 4], [1, 1, 1, 1]));

// console.log(getHints([1, 2, 3, 4], [4, 3, 2, 1]));