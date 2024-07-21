const convertToCelsius = function(num) {
  let degrees = (num - 32) / (9/5)
  return Math.round(degrees * 10) / 10;
};

const convertToFahrenheit = function(num) {
  let degrees = num * (9/5) + 32;
  return Math.round(degrees * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
