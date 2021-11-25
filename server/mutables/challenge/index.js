// 1
const products = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];
const products2 = products.filter(p => p.id != '🍕');
console.log(products2);

// 2
const update = {
  id: '🥞',
  changes: {
    price: 200,
    description: 'Delicious',
  },
};

const updatedProducts = products.map(item => {
  if (item.id === update.id) {
    return {
      ...item,
      ...update.changes
    };
    
  }
  return {...item};
});

console.log(updatedProducts);