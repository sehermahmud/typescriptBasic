// When to use annotations

// 3) When a function returns the 'any' type and we need to clarify a value

// without annotations
let numberOne = [-18, 13, -7];
let numberAboveZeroOne: false;

for (let i = 0; i < numberOne.length; i++) {
  if (numberOne[i] > 0) {
    numberAboveZeroOne = false; // number22[i], please give this a test and it will show the error
    console.log('Added', numberAboveZeroOne);
  } else {
    numberAboveZeroOne = null;
    console.log('number is smaller like 0', numberAboveZeroOne);
  }
}

// with annotations
let numberTwo = [-18, 13, -7];
let numberAboveZeroTwo: boolean | number = false;

for (let i = 0; i < numberTwo.length; i++) {
  if (numberTwo[i] > 0) {
    numberAboveZeroTwo = numberTwo[i];
    console.log('Added', numberAboveZeroTwo);
  } else {
    numberAboveZeroTwo = null;
    console.log('number is smaller like 0', numberAboveZeroTwo);
  }
}
