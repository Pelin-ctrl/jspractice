let A = new Set([1, 2, 3])
let B = new Set([2, 3, 4])

let union = new Set([...A, ...B]);

console.log(union);

let difference = new Set([...A].filter((x) => !B.has(x)));

console.log(difference);

let difference_2 = new Set([...B].filter((x) => !A.has(x)));

console.log(difference_2);

let intersection = new Set([...A].filter((x) => B.has(x)));

console.log(intersection);

let symmetricDifference = new Set([...A].filter(x=>!B.has(x)).concat([...B].filter(x=> !A.has(x))));

console.log(symmetricDifference);

