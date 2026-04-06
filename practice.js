// let result;
//     let [size, position, data] = input.split(" | ");
//     let zeros;

//     size     = Number(size);
//     position = String(position);
//     data     = JSON.parse(data);

//     // -- ваш код начинается тут
    
//     if (data.length > size) {
//         result = 'Неверный размер';
//     }
//     else if (position!=='left' && position!=='right'){
//         result = 'Неверная позиция';
//     }
//     else{
//         zeros = size - data.length;
//         for (let i=0; i<zeros; i++){
//         if (position==='left'){
//         data.unshift(0);
//         }
//     }
    
//     for (let i=0; i<zeros; i++){
//         if (position==='right'){
//         data.push(0);
//         }
//     }
    
//     result = data.join(', ');
//     }
    


//     console.log(result);



// test3
let result;
let grid = [
    [0,1,0,1,0,0],
    [0,1,0,1,0,0],
    [1,1,0,1,1,0]
  ]
let bottomRow = grid[grid.length-1]
let chunks = 0;


// -- ваш код начинается тут

for (let i=0; i<bottomRow.length; i++){
    if (bottomRow[i]===0){
        chunks++
    }
}


result=chunks;

console.log(result)