const elements = ['Fire', 'Air', 'Water'];
const title = 'Curso de manipulación de arrays';

// Normal For
let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  if (index === elements.length - 1) rtaFinal += element;
  else rtaFinal += element + separator;
};

// Join
const rta = elements.join('--');

// Split
const rta2 = title.split(' ').join('-').toLowerCase();

console.group('Normal For');
console.log(rtaFinal);
console.groupEnd();
console.group('Join');
console.log(rta);
console.groupEnd();

console.group('Split');
console.log(rta2);
console.groupEnd();

