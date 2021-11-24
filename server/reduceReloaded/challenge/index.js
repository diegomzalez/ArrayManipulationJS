const range = require('range');
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = array
.reduce((obj, item) => {
  if(item in range.range(0, 6)) {
    obj["1-5"]++;
  }
  if (item in range.range(5, 9)) {
    obj["6-8"]++;
  }
  if (item in range.range(8, 11)) {
    obj["9-10"]++
  }
  return obj;
}, {
  "1-5": 0,
  "6-8": 0,
  "9-10": 0,
});
console.log(result);
