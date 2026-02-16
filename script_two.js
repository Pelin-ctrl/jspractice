//шейкерная сортировка

function shakerSort(arr){
let start=0;
let end=arr.length-1;
let isSorted=true;

while (isSorted){
    isSorted=false;

    for (let i=start; i<end; i++){
        if (arr[i]>arr[i+1]){
            [arr[i], arr[i+1]]=[arr[i+1], arr[i]];
            isSorted=true;
        }
    }

   if (!isSorted){
    break;
   }

   isSorted=false;
   end--;

    for (let i=end-1; i>=start; i--){
        if (arr[i]>arr[i+1]){
            [arr[i], arr[i+1]]=[arr[i+1], arr[i]];
            isSorted=true;
        } 
    }
    start++;
}
   return arr;
}

let arr = [1, 5, 6, 7, 2, 5, 2];
let newFunction=shakerSort(arr);
console.log(arr);

