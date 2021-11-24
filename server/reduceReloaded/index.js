const items = [1, 3, 2, 3, 3, 4, 19, 2, 4];
const result = items.reduce((obj, item) => {
  if(!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  };
  return obj;
}, {});
const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];
const levelData = data
.map(item => item.level)
.reduce((obj, item) => {
  if(!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  };
  return obj;
}, {});

console.log(result)
console.log(levelData);