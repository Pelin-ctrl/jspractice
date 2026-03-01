let result;
let A = new Set([1, 2, 3, 4]);
let e = 9;
let B = new Set([7, 8 ,9]);

result=A.add(e);

console.log(A);

let number_1=4;
let S=([...A].filter(x => x!==4));
console.log(S);

let you=(A.forEach((x)=> {B.has(x) ? A.delete(x):x}));

console.log(you);

