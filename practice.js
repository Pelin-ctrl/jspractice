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



// // test3
// let result;
// let grid = [
//     [0,1,0,1,0,0],
//     [0,1,0,1,0,0],
//     [1,1,0,1,1,0]
//   ]
// let bottomRow = grid[grid.length-1]
// let chunks = 0;


// // -- ваш код начинается тут

// for (let i=0; i<bottomRow.length; i++){
//     if (bottomRow[i]===0){
//         chunks++
//     }
// }


// result=chunks;

// console.log(result)



//test4

// let result;
// let data = [4, 3, 7, 1, 8, 6, 5, 2];
// let even = [];
// let uneven = [];


// // -- ваш код начинается тут

// for (let i=0; i<data.length; i++){
//     if (data[i]%2===0){
//         even.push(data[i]);
//     }
//     if (data[i]%2!==0){
//         uneven.push(data[i]);
//     }
// }

// even.sort((a, b) => a-b);
// uneven.sort((a, b) => a-b);



// result = `(${even.join(', ')}) (${uneven.join(', ')})`;

// console.log(result)



let result;

for (let i = 0; i<items.length; i++){
    if (items[i]==='Энергетик'){
        result = power+=5
    }
    if (items[i]==='Кофе'){
        result = power+=10
    }
    if (result>100){
        result=100
    }
  }
