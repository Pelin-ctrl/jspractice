let arr = [4, 5, 8, 4, 4];
function isBiggerThan5(element, index, array){
    return element>5;
}
function isLessThan3(element, index, array){
    return element<3;
}

console.log(arr.some(isBiggerThan5)); //true
console.log(arr.some(isLessThan3)); //false


const canHealALot = healthPotions.some(potion => potion >= 100);

if (canHealALot) {
  console.log("Игрок может вылечить значительное количество здоровья!");
} else {
  console.log("У игрока нет зелий здоровья, которые могут исцелить его на 100 и более единиц.");
}