const IceCream = {
  color: 'lightbrown',
  carbonated: true,
  sugar: 40,
};

// Type alias
type caramilkIceCream = [string, boolean, number];

const caramilkIceCream: caramilkIceCream = ['lightbrown', true, 40];
const blackforrestIceCream: caramilkIceCream = ['Superdarkbrown', true, 40];
const coffeeIceCream: caramilkIceCream = ['darkbrown', false, 0];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354,
};
