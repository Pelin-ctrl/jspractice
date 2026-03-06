let nums = [0, 1, 0, 1, 0];

let result = nums.reduce(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
});

console.log(result); //2