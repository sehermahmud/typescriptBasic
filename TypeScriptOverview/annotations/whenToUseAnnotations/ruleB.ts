// When to use annotations

// 22) When we declare a variable on one line
// and initalizate it later

// without annotations
let words1 = ['Blue', 'Pink', 'Green'];
let foundWord1;

for (let i = 0; i < words1.length; i++) {
  if (words1[i] === 'Pink') {
    foundWord1 = true;
    console.log('FoundWord: Pink', foundWord1);
  } else {
    foundWord1 = false;
    console.log('Did not FoundWord: ?', foundWord1);
  }
}

// with annotations
let words2 = ['Blue', 'Pink', 'Green'];
let foundWord2: boolean;

for (let i = 0; i < words2.length; i++) {
  if (words2[i] === 'Pink') {
    foundWord2 = true;
    console.log('FoundWord: Pink', foundWord2);
  } else {
    foundWord2 = false;
    console.log('Did not FoundWord: ?', foundWord2);
  }
}
