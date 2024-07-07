function getRandomInt(min, max) {
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 100)); 
console.log(getRandomInt(-5, 10)); 