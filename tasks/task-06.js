function calculateTotalPrice(array, prop) {
  "use strict";
  // Write code under this line
  let totalCost = 0;

  for (const arr of array) {
    // const keys = Object.keys(arr);
    const values = Object.values(arr);

    if (values[0] === prop) {
      totalCost += values[1] * values[2];
    }

    // for (const key of keys) {
    //   if (key[] === prop) {
    //     totalCost += keys[1] * keys[2];
    //   }
    // }
  }

  return totalCost;
}

// Объекты и ожидаемый результат
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Радар", price: 1280, quantity: 2 },
  { name: "Радар", price: 1320, quantity: 1 },
  { name: "Сканер", price: 2700, quantity: 1 },
  { name: "Сканер", price: 2500, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

console.log(calculateTotalPrice(products, "Радар"));
// 9080

//console.log(calculateTotalPrice(products, 'Сканер'));
// 10200

//console.log(calculateTotalPrice(products, 'Захват'));
// 2400

//console.log(calculateTotalPrice(products, 'Дроид'));
// 2800
