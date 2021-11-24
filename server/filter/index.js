const words = ['spray', 'limit', 'elite', 'exuberant'];
const newArray = [];
const orders = [
        {
                customerName: 'Nicolas',
                total: 60,
                delivered: true,
        },
        {
                customerName: 'Zulema',
                total: 120,
                delivered: false,
        },
        {
                customerName: 'Santiago',
                total: 180,
                delivered: true,
        },
        {
                customerName: 'Valentina',
                total: 240,
                delivered: true,
        },
        {
                customerName: 'Nicolas',
                total: 18,
                delivered: false,
        }
];
const search = (query) => {
        return orders.filter(item => {
                return item.customerName.includes(query);
        });
};
// Normal For
for (let index = 0; index < words.length; index++) {
        const item = words[index];
        if (item.length >= 6) {
                newArray.push(item);
        };
};

// Filter
const filter = words.filter(item => item.length >= 6);
const deliveredFilters = orders.filter(item => item.delivered && item.total >= 100);

console.group('Filter');
console.group('Normal For');
console.log('original', words);
console.log('newArray', newArray);
console.groupEnd();
console.group('Filter');
console.log('original', words);
console.log('filter', filter);
console.log('deliveredFilters', deliveredFilters);
console.log(search('Nico'));
console.groupEnd();
console.groupEnd();