const TSjson = '{"x": 10, "y": 20}';
const TScoordinates: { x: number; y: number } = JSON.parse(TSjson);
console.log(TScoordinates);

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
