const max = (notes) => {
    let tmp_max = notes[0];
    for(let i=1; i<notes.length; i++) {
       if (notes[i] > tmp_max) tmp_max = notes[i];
    }
    return tmp_max;
}

module.exports = { getMaxValue: max };

//console.log(max([10,30,6,90]));