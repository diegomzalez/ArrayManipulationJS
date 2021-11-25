// 1
const products = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];
const products2 = products.filter(p => p.id != '🍕');
console.log(products2);

// 2
const updates = {
  id: '🥞',
  changes: {
    price: 200,
    description: 'Delicious',
  },
};

const productIndex = products.findIndex(item => item.id === updates.id);
products[productIndex] = {
  ...products[productIndex],
  ...updates.changes,
};
console.log(products);