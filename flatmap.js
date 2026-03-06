const players = [
    {
      name: "Майк",
      stats: {
        level: 10,
        health: 100,
        attack: 20
      },
      inventory: ["Меч", "Зелье", "Щит"]
    },
    {
      name: "Одиннадцать",
      stats: {
        level: 15,
        health: 150,
        attack: 30
      },
      inventory: ["Палочка", "Свиток", "Эликсир"]
    }
  ];

  const players_2 = players.flatMap(play => play.inventory);
  console.log(players_2); //[ 'Меч', 'Зелье', 'Щит', 'Палочка', 'Свиток', 'Эликсир' ]


  let spellbooks = ["Заклинание", "Гадание"];
let scrolls = ["Огненный шар", "Удар молнии"];
let wands = ["Дуб", "Ива"];

let finding = [spellbooks, scrolls, wands].flatMap(first => first.map(name => (`${name} - ${first[0].charAt(0)}`)));
console.log(finding); 
// [
//     'Заклинание - З',
//     'Гадание - З',
//     'Огненный шар - О',
//     'Удар молнии - О',
//     'Дуб - Д',
//     'Ива - Д'
//   ]