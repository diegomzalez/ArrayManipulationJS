const pets = ['cat', 'dog', 'bat'];
let includeInArray = false;

// Normal For
for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if(element === 'dog') {
    includeInArray = true;
    break;
  };
};

// Find 
const rta = pets.includes('dog');

console.group('Normal For');
console.log(includeInArray);
console.groupEnd();
console.group('Find');
console.log(rta);
console.groupEnd();