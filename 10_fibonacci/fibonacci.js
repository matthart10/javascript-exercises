const fibonacci = function(num) {
    let arrayOfNums = [];
    let newNum = parseInt(num, 10);
    arrayOfNums[0] = 1;
    arrayOfNums[1] = 1;
    for (i = 2; i < newNum + 1; i++) {
        arrayOfNums[i] = arrayOfNums[i-2] + arrayOfNums[i-1];
    }
    if (newNum === 0) {
        return 0;
    } else if (newNum < 0) {
        return "OOPS"
    } else {
        return arrayOfNums[newNum-1];
    }
        
};
// Do not edit below this line
module.exports = fibonacci;
