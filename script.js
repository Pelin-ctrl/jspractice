//Пузырьковая сортировка

function bubbleSort(arr){
    let len=arr.length;
    let swapped=true;

    while(swapped){
        swapped=false;

        for (let i=0; i<len; i++){
            if (arr[i]<arr[i-1]){
                let memoryData=arr[i];
                arr[i]=arr[i-1];
                arr[i-1]=memoryData;
            }
        }
    }

    return arr;
}

let arr=[1, 4, 2, 5, 7, 9, 3];
let newFunction=bubbleSort(arr);
console.log(arr);