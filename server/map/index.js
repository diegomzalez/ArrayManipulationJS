const letters = ['a', 'b', 'c'];
const newArray = [];

// Normal For
for (let i = 0; i < letters.length; i++) {
        const element = letters[i];
        newArray.push(element + '++');
};

console.group('Normal For');
console.log('original', letters);
console.log('new', newArray);
console.groupEnd();
console.log('--------------------------');

// Map
const otherArray =  letters.map(element => element + '++');
console.group('Map');
console.log('original', letters);
console.log('new', otherArray);
console.groupEnd();