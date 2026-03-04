const enemies = [
    { name: "Гоблин", x: 100, y: 50 },
    { name: "Скелет", x: 200, y: 100 },
    { name: "Орк", x: 300, y: 150 }
  ];

  enemies.forEach(enemy => {
    enemy.x+=5;
    enemy.y+=10;
  })
  console.log(enemies); //map создаёт новый массив, а forEach изменяет имеющийся массив или как ещё говорят изменяет на месте.

  let traps = [
    { type: "шипы", delay: 1000 },
    { type: "огонь", delay: 2000 },
    { type: "яд", delay: 5000 }
  ];
  
  function activateTrap(type) {
    console.log(`Активируем ловушку: ${type}.`);
  }

  traps.forEach(trap => {
    setTimeout(() => {
        activateTrap(trap.type)
    }, trap.delay);
  });

  let inventory = [
    { name: "Меч", quantity: 5 },
    { name: "Щит", quantity: 2 },
    { name: "Зелье", quantity: 1 }
  ];

  inventory.forEach(invent=>{
    console.log(invent.name)
  });
  