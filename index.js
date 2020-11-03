const data = require('./lib.json');

module.exports = function () {
    const a = Math.random() * data.length >> 0;
    const b = Math.random() * data.length >> 0;
    return data[a][0] + ' ' + data[b][1];
}
