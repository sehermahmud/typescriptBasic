const TScarMakers = ['lambogini', 'ford', 'toyota', 'chevy'];
const TSdates = [new Date(), new Date()];

const TScarsByMake = [['zizali']['Kai']['Sanena']['break']];

// 1. TS can do type inference when extracting values from an array
const TScar = TScarMakers[0];
const TSmyCar = TScarMakers.pop();

// 2. TS can prevent us from adding incompatible values to the array
TScarMakers.push('lusie'); // change the word "lusie" and replace with 100, and it will show an error

// 3. We can get help with 'map', 'forEach', 'reduce' functions
TScarMakers.map((car: string): string => {
  return car.toUpperCase();
});

// 4. Flexible - arrays can still contain multiple different types

const TSimportantDates: (string | Date)[] = [new Date()];
TSimportantDates.push('2020-11-24');
TSimportantDates.push(new Date());
