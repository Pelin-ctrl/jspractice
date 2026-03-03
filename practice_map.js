let playerPositions = [
    { x: 10, y: 20 },
    { x: 20, y: 30 },
    { x: 30, y: 40 }
  ];

let updatePositions = playerPositions.map(pos => ({x: pos.x+5, y: pos.y+10}));
console.log(updatePositions);

const enemies = [
    { name: "Гоблин", health: 10 },
    { name: "Скелет", health: 20 },
    { name: "Орк", health: 30 }
  ];

let enemyNames = enemies.map(enemy => enemy.name);
console.log(enemyNames);

let demages = [10, 20, 30];
let gigi = demages.map(dam => `Урон ${dam} очков.`)
console.log(gigi)