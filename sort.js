let items = ["Меч", "Щит", "Свиток", "Кольцо"];
items.sort();
console.log(items); //[ 'Кольцо', 'Меч', 'Свиток', 'Щит' ]

items.sort().reverse(); // ["Щит", "Свиток", "Меч", "Кольцо"]
let nums = [2, 3, 1, 4, 5];

console.log(nums.sort((a, b) => a - b)); // По возрастанию [1, 2, 3, 4, 5]
console.log(nums.sort((a, b) => b - a)); // По убыванию    [5, 4, 3, 2, 1]

                  
function sortNumericAsc() {
    return this.slice().sort((a, b) => a - b);
}

function sortNumericDesc() {
    return this.slice().sort((a, b) => b - a);
}

Array.prototype.sortNumericAsc = sortNumericAsc;
Array.prototype.sortNumericDesc = sortNumericDesc;

let nums_1 = [2, 3, 1, 4, 5];

console.log(nums_1.sortNumericAsc());  // По возрастанию [1, 2, 3, 4, 5]
console.log(nums_1.sortNumericDesc()); // По убыванию    [5, 4, 3, 2, 1]