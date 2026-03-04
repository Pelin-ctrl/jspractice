
const enemies = [
    { name: "Гоблин", x: 100, y: 50 },
    { name: "Скелет", x: 200, y: 100 },
    { name: "Орк", x: 300, y: 150 },
  ];
  
  const letter = enemies.findIndex(enemy => enemy.name === "Скелет");
  console.log(letter); //1
  