const totals = [1, 2, 3, 4];
let sum = 0;

// Normal For
for (let index = 0; index < totals.length; index++) {
        const element = totals[index];
        sum = sum + element;
};

// Reduce
const totalSum = totals.reduce((sum, item) => sum + item, 0);

console.group('Reduce');
console.group('Normal For');
console.log(sum)
console.groupEnd();
console.group('Reduce');
console.log(totalSum);
console.groupEnd();
