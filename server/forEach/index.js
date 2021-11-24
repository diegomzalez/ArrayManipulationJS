const letters = ['a', 'b', 'c'];

// Normal for
console.group('Normal For');
for (let index = 0; index < letters.length; index++) {
        const element = letters[index];
        console.log('for ', element);
};
console.groupEnd();

// forEach
console.group('ForEach')
letters.forEach(item => console.log('forEach' ,item));
console.groupEnd();
