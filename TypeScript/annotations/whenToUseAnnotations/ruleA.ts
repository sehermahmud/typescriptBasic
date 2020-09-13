// When to use annotations

// 1) Function that returns the 'any' type

// without annotations
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates1);

// with annotations
const jsonTwo = '{"x": 10, "y": 20}';
const coordinatesTwo: { x: number; y: number } = JSON.parse(jsonTwo);
console.log(coordinatesTwo);
