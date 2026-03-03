let enemies = [
    { name: "Гоблин", health: 10 },
    { name: "Скелет", health: 20 },
    { name: "Орк", health: 30 }
  ];

let lowerEnemies = enemies.filter(enemy => enemy.health<20);
console.log(lowerEnemies);


let movies = [
    { title: 'The Shawshank Redemption', director: 'Frank Darabont', year: 1994 },
    { title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 },
    { title: 'The Dark Knight', director: 'Christopher Nolan', year: 2008 },
    { title: 'The Godfather: Part II', director: 'Francis Ford Coppola', year: 1974 },
    { title: 'The Lord of the Rings: The Return of the King', director: 'Peter Jackson', year: 2003 },
    { title: 'Pulp Fiction', director: 'Quentin Tarantino', year: 1994 },
    { title: 'Schindler\'s List', director: 'Steven Spielberg', year: 1993 },
    { title: 'Forrest Gump', director: 'Robert Zemeckis', year: 1994 },
    { title: 'Inception', director: 'Christopher Nolan', year: 2010 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', director: 'Peter Jackson', year: 2001 }
  ];

let yearsFilt = movies.filter(movie => movie.year>=1990 && movie.year<=1999);

for (item of yearsFilt){
  console.log(item.title);
}

let tut = movies.filter(movi => movi.year>20);

for (yy of tut){
  console.log(yy.title);
}
  

  let filtrac = movies.filter(mov => mov.title.startsWith('The'));
  for (titl of filtrac){
    console.log(titl.title);
  }

  let enemi = [
    { name: "Гоблин", health: 10 },
    { name: "Скелет", health: 20 },
    { name: "Орк", health: 30 }
];
  
let lowHealthEnemies = enemi.filter(enemy => enemy.health < 30);
  
console.log(lowHealthEnemies[1].name[1]);