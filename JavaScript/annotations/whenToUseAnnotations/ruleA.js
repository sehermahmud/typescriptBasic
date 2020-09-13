// When to use annotations

// 1) Function that returns the 'any' type

// without annotations

var json1 = '{"x": 10, "y": 20}';
var coordinates1 = JSON.parse(json1);
console.log(coordinates1);

// with annotations

var json2 = '{"x": 10, "y": 20}';
var coordinates2 = JSON.parse(json2);
console.log(coordinates2);
