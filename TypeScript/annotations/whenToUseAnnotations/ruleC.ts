// When to use annotations

// 3) When a function returns the 'any' type and we need to clarify a value

// without annotations
let number11 = [-18, 13, -7];
let numberAboveZero11: false;

for (let i = 0; i < number11.length; i++) {
  if (number11[i] > 0) {
    numberAboveZero11 = false; // number22[i], please give this a test and it will show the error
    console.log('Added', numberAboveZero11);
  } else {
    numberAboveZero11 = null;
    console.log('number is smaller like 0', numberAboveZero11);
  }
}

// with annotations
let number22 = [-18, 13, -7];
let numberAboveZero22: boolean | number = false;

for (let i = 0; i < number22.length; i++) {
  if (number22[i] > 0) {
    numberAboveZero22 = number22[i];
    console.log('Added', numberAboveZero22);
  } else {
    numberAboveZero22 = null;
    console.log('number is smaller like 0', numberAboveZero22);
  }
}
