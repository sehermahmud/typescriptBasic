// When to use annotations

// 1) Function that returns the 'any' type

// without annotations
const json1 = '{"x": 10, "y": 20}';
const coordinates1 = JSON.parse(json1);
console.log(coordinates1);

// with annotations
const json2 = '{"x": 10, "y": 20}';
const coordinates2: { x: number; y: number } = JSON.parse(json2);
console.log(coordinates2);
