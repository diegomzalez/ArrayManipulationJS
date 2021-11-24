const orders = [
        {
                customeName: 'Nicolas',
                total: 60,
                delivered: true,
        },
        {
                customeName: 'Zulema',
                total: 120,
                delivered: false,
        },
        {
                customeName: 'Santiago',
                total: 180,
                delivered: true,
        },
        {
                customeName: 'Valentina',
                total: 240,
                delivered: true,
        },
];

const totals = orders.map(item => item.total);
const tax = orders.map(item => {
        return {
                ...item,
                tax: .19,
        };
});

console.group('Map Reloaded');
console.group('Original Array');
console.log('original', orders);
console.groupEnd();
console.group('Maped Array')
console.log('totals', totals);
console.log('Tax', tax);
console.groupEnd();
console.groupEnd();