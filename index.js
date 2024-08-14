const data = require('./lib.json');

function getRandomNumberFromString(str, min, max) {
    const charArray = Array.from(str);
    const sumOfCharCodes = charArray.reduce(
      (acc, char) => acc + char.charCodeAt(0),
      0
    );
    const range = max - min + 1;
    return (sumOfCharCodes % range) + min;
}
  
function ryaa (key) {
    let a, b;

    if (key) {
        const key1 = key.slice(0, key.length / 2);
        const key2 = key.slice(key.length / 2);

        a = getRandomNumberFromString(key1, 0, data.length - 1);
        b = getRandomNumberFromString(key2, 0, data.length - 1);
    } else {
        a = Math.random() * data.length >> 0;
        b = Math.random() * data.length >> 0;
    }
    
    return data[a][0] + ' ' + data[b][1];
}

module.exports = ryaa;
module.exports.ryaa = ryaa;
