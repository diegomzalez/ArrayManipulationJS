const matrix = [
  [1, 2, 3],
  [4, 5, 6, [1, 2, [1, 2]]],
  [7, 8, 9],
];
// The function performs each element in each array that has the array passed as a parameter, so it concatenates each array into a new array.function depth (list) {
function depth(list) {
  let newList = [];
  if(typeof list != "object") return [list];
  list.forEach(element => {
    newList = newList.concat(depth(element));
  });
  return newList;
};
const a = depth(matrix);
console.log(a);