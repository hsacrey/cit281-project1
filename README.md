## Project 1

I used the CLI to create and navigate through a bunch of folders, then I was to list those folders in a "tree-like structure":

![p1-tree](/p1-folders.png)

I practiced using the ping command and using break in the console (Ctrl+C):

![ping n break](/p1-break.png)

I also created and executed the following Javascript files:

#### p1-date.js:
```javascript
/*
    CIT 281 Project 1
    Name: Hunter Sacrey
*/
//"Days of the week" array -> Get today's date -> convert it to day of the week -> print
const dotw = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; 
console.log(dotw[new Date().getDay()]);
```
#### p1-random.js:
```javascript
/*
    CIT 281, Project 1
    Name: Hunter Sacrey
*/
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
```
