let numbers = [2, 4, 6, 8, 10];
let allEven = numbers.every(num => num%2==0);
console.log(allEven); //true

let sum = [10, 20, 30, 40, 50];
let sum_do = sum.every(num => num > 3);
console.log(sum_do); //true

const people = [{ name: "Лия", age: 21 }, { name: "Макс", age: 19 }, { name: "Майкл", age: 19 }];
const checking = people.every(person => person.age> 18 && person.name.length>2);
console.log(checking); //true

let enemies = [
    { name: "Гоблин", health: 0 },
    { name: "Скелет", health: 10 },
    { name: "Орк", health: 0 }
  ];
  
  function isAllEnemiesDead(enemies) {
    return enemies.every(enemy => enemy.health === 0);
  }
  
  if (isAllEnemiesDead(enemies)) {
    console.log("Переходим на следующий уровень!");
  } else {
    console.log("Остаемся на текущем уровне!");
  }