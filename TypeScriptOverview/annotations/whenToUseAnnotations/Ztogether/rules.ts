// 1. Function that returns the 'any' type
const TSjson = '{"x": 10, "y": 20}';
const TScoordinates: { x: number; y: number } = JSON.parse(TSjson);
console.log(TScoordinates);

// 2. When we declare a variable on one line and initalizate it later
let TSwords = ['Blue', 'Pink', 'Green'];
let TSfoundWord: boolean;

for (let i = 0; i < TSwords.length; i++) {
  if (TSwords[i] === 'Pink') {
    TSfoundWord = true;
    console.log('FoundWord: Pink', TSfoundWord);
  } else {
    TSfoundWord = false;
    console.log('Did not FoundWord: ?', TSfoundWord);
  }
}

// 3. When a function returns the 'any' type and we need to clarify a value
let TSnumber = [-18, 13, -7];
let TSnumberAboveZero: boolean | number = false;

for (let i = 0; i < TSnumber.length; i++) {
  if (TSnumber[i] > 0) {
    TSnumberAboveZero = TSnumber[i];
    console.log('Added', TSnumberAboveZero);
  } else {
    TSnumberAboveZero = null;
    console.log('number is smaller like 0', TSnumberAboveZero);
  }
}
