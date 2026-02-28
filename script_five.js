//Set and size

let A = new Set(['apple', 'cocunut', 'cola']);
let B = new Set(['milk']);
let C = (B);

let F = ([...A, ...C]);

console.log(F);

let G = new Set(['banana', 'frog']);

console.log(G.size); //это массив поэтому здесь нет свойств если надо то только .length

let items = new Set(["камень", "золото", "серебро"]);

console.log(items.size); // 3



