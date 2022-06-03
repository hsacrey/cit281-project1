// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let alpha = "abcdefghijklmnopqrstuvwxyz";
let result = "";

let wordLength = getRandomInteger(5, 26);
for (let i = 0; i <= wordLength; i++){
    randomIndex = getRandomInteger(0,26);
    result += alpha[randomIndex];
}

console.log(result);