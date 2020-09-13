// When to use annotations

// 2) When we declare a variable on one line
// and initalizate it later

// without annotations

var words1 = ['Blue', 'Pink', 'Green'];
var foundWord1;
for (var i = 0; i < words1.length; i++) {
  if (words1[i] === 'Pink') {
    foundWord1 = true;
    console.log('FoundWord: Pink', foundWord1);
  } else {
    foundWord1 = false;
    console.log('Did not FoundWord: ?', foundWord1);
  }
}

// with annotations

var words2 = ['Blue', 'Pink', 'Green'];
var foundWord2;
for (var i = 0; i < words2.length; i++) {
  if (words2[i] === 'Pink') {
    foundWord2 = true;
    console.log('FoundWord: Pink', foundWord2);
  } else {
    foundWord2 = false;
    console.log('Did not FoundWord: ?', foundWord2);
  }
}
