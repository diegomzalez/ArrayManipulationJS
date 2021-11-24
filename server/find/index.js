const numbers = [1, 30, 49, 29, 10, 13];
let rta = undefined;
const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

// Normal For
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if(element === 30) {
    rta = element;
    break;
  };
};

// Find
const rta2 = numbers.find(item => item === 30);
const rta3 = products.find(item => item.id === '🍔');
const rta4 = products.findIndex(item => item.id === '🍔');

console.group('Normal For');
console.log(rta);
console.groupEnd();
console.group('Find');
console.log(rta2);
console.log(rta3);
console.log(rta4);

console.groupEnd();