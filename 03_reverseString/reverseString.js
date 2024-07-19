const reverseString = function(string) {
    let newString = "";
    for (let i=0; i < string.length; i++) {
        let char = string.charAt(i);
        newString = char + newString;
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
