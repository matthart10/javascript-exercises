
const palindromes = function (inputString) {
let newStringWithCase = inputString.replace(/[^a-zA-Z0-9]/g, '');
let newString = newStringWithCase.toLowerCase();
let newStringLengthIndex = newString.length - 1;
// console.log(newString);
for (i = 0; i < newString.length; i++) {
    // console.log(newString[i])
    if (newString[i] === newString[newStringLengthIndex]) {
        newStringLengthIndex = newStringLengthIndex - 1;
    } else {
        return false;
    };
    };
    return true;
};

// console.log(palindromes('r3ace3car'));
// Do not edit below this line
module.exports = palindromes;
