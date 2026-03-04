
const enemies = [
    { name: "Гоблин", x: 100, y: 50 },
    { name: "Скелет", x: 200, y: 100 },
    { name: "Орк", x: 300, y: 150 },
  ];
  
  const letter = enemies.findIndex(enemy => enemy.name === "Скелет");
  console.log(letter); //1
  
 
  const index = enemies.findIndex(enemy => enemy.x > 50 && enemy.y > 50);
  
  console.log(index);  // 1 cause вывелся первый элемент, который подошел под условие
  const index_1 = enemies.findIndex(enemy => enemy.name[0] === "С"); //ckelet