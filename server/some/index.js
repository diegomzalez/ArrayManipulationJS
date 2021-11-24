var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');
const isOverlap = (newDate) => {
  return dates.some(date => {
    return areIntervalsOverlapping(
      {start: date.startDate, end: date.endDate},
      {start: newDate.startDate, end: newDate.endDate},
    );
  });
};

const numbers = [1, 2, 3, 4];
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
const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

const newAppointment = {
  startDate: new Date(2021, 1, 1, 8),
  endDate: new Date(2021, 1, 1, 9, 30),
};

// Normal For
let result = false;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if(element % 2 === 0) {
    result = true;
    break;
  };
};

// Some
const result2 = numbers.some(item => item % 2 === 0);
const result3 = orders.some(item => item.delivered);
console.group('Normal For');
console.log(result);
console.groupEnd();
console.group('Some');
console.log(result2);
console.log(result3);
console.log(isOverlap(newAppointment));
console.groupEnd();