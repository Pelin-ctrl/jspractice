let arr1 = [1, 2, [3, 4]];

arr1.flat(); // [1, 2, 3, 4]

let arr2 = [1, 2, [3, 4, [5, 6]]];

arr2.flat(); // [1, 2, 3, 4, [5, 6]]

let arr3 = [1, 2, [3, 4, [5, 6]]];

arr3.flat(2); // [1, 2, 3, 4, 5, 6]

let items = [
    'background_music.mp3',
    'sound_effect1.mp3',
    [
      "sound_effect2.mp3", 
      "background_music_loop.mp3", 
      "sound_effect3.mp3"
    ]
  ]; 

console.log(items.flat().length);