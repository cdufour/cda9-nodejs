const utils = require('./utils');


/* fonction retournant la moyenne des notes fournies en entrée */
function average(notes)
{
    let total = 0;
    notes.forEach(n => total += n);
    return total / notes.length;
}


console.log('*** Formation Nodejs ***');

const notes = [4, 12, 20, 3, 0, 11];
let total = 0;
notes.forEach(n => total += n);
console.log('Moyenne: ' + total / notes.length);

console.log('Autre moyenne: ' + average([20, 10]));
console.log('Max: ' + utils.getMaxValue(notes));







