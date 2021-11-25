const firstArray = [1, 1, 2, 2];
const secondArray = [3, 3, 4, 4];
const newArray = [...firstArray];

// Normal For
for (let index = 0; index < secondArray.length; index++) {
  const element = secondArray[index];
  newArray.push(element);;
};

// Concat
const thirdArray = firstArray.concat(secondArray);
const rta = [...firstArray, ...secondArray];
const rta2 = [...firstArray, ...'random'];

console.group('Normal For');
console.log(newArray);
console.groupEnd();
console.group('Concat');
console.log(thirdArray);
console.groupEnd();
console.group('...');
console.log(rta);
console.log(rta2);
console.groupEnd();