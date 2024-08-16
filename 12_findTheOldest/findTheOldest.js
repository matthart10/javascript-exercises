const findTheOldest = function(arr) {
    arr.sort(function(a, b) {
        const theDate = new Date();
        let output = 'yearOfDeath' in a;
        let outputB = 'yearOfDeath' in b;
        if (!output) {
            a["yearOfDeath"] = theDate.getFullYear();
        }
        if (!outputB) {
            b["yearOfDeath"] = theDate.getFullYear();
        }
        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
        return lastGuy > nextGuy ? -1 : 1;
    });
    return arr[0];
};
// Do not edit below this line
module.exports = findTheOldest;
