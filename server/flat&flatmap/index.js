const matrix = [
  [1, 2, 3],
  [4, 5, 6, [1, 2, [1, 2]]],
  [7, 8, 9],
];
const users = [
  {userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
  {userId: 2, username: "Mike", attributes: ["Lovely"]},
  {userId: 3, username: "Nick", attributes: ["Nice", "Cool"]}
]

// Normal for
const newArray = [];

for (let index = 0; index < matrix.length; index++) {
  const array = matrix[index];
  for (let j = 0; j < array.length; j++) {
    const element = matrix[index][j];
    newArray.push(element);
  };
};

// Flat
const rta = matrix.flat(3);

// FlatMap
const rta2 = users.flatMap(user => user.attributes);

console.group('Normal For');
console.log(newArray);
console.groupEnd();
console.group('Flat');
console.log(rta);
console.groupEnd();
console.group('FlatMap');
console.log(rta2);
console.groupEnd();