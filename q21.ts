/*
They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
*/
let cars = [
    {
      made: "Suzuki",
      model: "Cultus",
      colour: "Grey",
    },
  ];
  console.log(cars);
  
  // adding new car in cars:
  let arrayOfCars: Array<typeof cars> = [];
  arrayOfCars.push(cars);
  
  let Honda = [
    {
      made: "Honda",
      model: "City",
      colour: "White",
    },
  ];
  arrayOfCars.push(Honda);
  console.log(cars);