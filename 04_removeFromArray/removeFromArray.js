const removeFromArray = function(arr, ...args) {
    let array = arr;
    let values = args;
    let newArray = array.filter( d => !values.includes(d));
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
