const removeFromArray = function(arr, ...args) {
    return arr.filter(item => args.indexOf(item) === -1);
};

// Do not edit below this line
module.exports = removeFromArray;
