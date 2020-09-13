// When to use annotations

// 3) When a function returns the 'any' type and we need to clarify a value

// without annotations

var number1 = [-18, 13, -7];
var numberAboveZero1;
for (var i = 0; i < number1.length; i++) {
  if (number1[i] > 0) {
    numberAboveZero1 = false; // number2[i], please give this a test and it will show the error
    console.log('Added', numberAboveZero1);
  } else {
    numberAboveZero1 = null;
    console.log('number is smaller like 0', numberAboveZero1);
  }
}

// with annotations

var number2 = [-18, 13, -7];
var numberAboveZero2 = false;
for (var i = 0; i < number2.length; i++) {
  if (number2[i] > 0) {
    numberAboveZero2 = number2[i];
    console.log('Added', numberAboveZero2);
  } else {
    numberAboveZero2 = null;
    console.log('number is smaller like 0', numberAboveZero2);
  }
}