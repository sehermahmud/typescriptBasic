// When to use annotations

// 22) When we declare a variable on one line
// and initalizate it later

// without annotations
let words11 = ['Blue', 'Pink', 'Green'];
let foundWord11;

for (let i = 0; i < words11.length; i++) {
  if (words11[i] === 'Pink') {
    foundWord11 = true;
    console.log('FoundWord: Pink', foundWord11);
  } else {
    foundWord11 = false;
    console.log('Did not FoundWord: ?', foundWord11);
  }
}

// with annotations
let words22 = ['Blue', 'Pink', 'Green'];
let foundWord22: boolean;

for (let i = 0; i < words22.length; i++) {
  if (words22[i] === 'Pink') {
    foundWord22 = true;
    console.log('FoundWord: Pink', foundWord22);
  } else {
    foundWord22 = false;
    console.log('Did not FoundWord: ?', foundWord22);
  }
}
