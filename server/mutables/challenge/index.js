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
  };
  return {...item};
});
console.log(updatedProducts);

// Sort
const orders = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
    date: new Date(2021, 1, 1, 12)
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
    date: new Date(2021, 1, 1, 11)
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
    date: new Date(2021, 1, 1, 8)
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
    date: new Date(2021, 1, 1, 9)
  },
];
orders.sort((a, b) => a.date - b.date);
console.log(orders);