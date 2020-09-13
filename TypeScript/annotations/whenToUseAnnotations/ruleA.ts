// When to use annotations

// 1) Function that returns the 'any' type

// without annotations
const json11 = '{"x": 10, "y": 20}';
const coordinates11 = JSON.parse(json1);
console.log(coordinates1);

// with annotations
const json22 = '{"x": 10, "y": 20}';
const coordinates22: { x: number; y: number } = JSON.parse(json2);
console.log(coordinates2);
