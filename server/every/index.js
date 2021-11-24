const numbers = [1, 30, 39, 29, 10, 13];
let result = true;
const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 15,
  },
];
// Normal For
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element >= 40) {
    result = false;
  };
};
// Every
const result2 = numbers.every(item => item >= 40);
const canTheyParticipe = team
.every(item => item.age <= 15);


console.group('Normal For');
console.log(result);
console.groupEnd();
console.group('Every');
console.log(result2);
console.log('Can they participe? ', canTheyParticipe);
console.groupEnd();
