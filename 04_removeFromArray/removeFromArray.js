const removeFromArray = function(array, ...allArgs) {
    let newArray = array;
    for (let arg of allArgs) {
        if (newArray.includes(arg)) {
            newArray = newArray.filter(function(filteredArray) {
                return filteredArray != arg;
            })
        } else {
            continue;
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
