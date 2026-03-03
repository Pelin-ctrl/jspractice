let items = new Array("Меч", "Лук", "Посох", "Щит", "Зелье", "Ключ", "Амулет");
console.log(items[2][0]); //П
console.log(items.length); //7
console.log(items[2+2][1-1]); //3
console.log(items[items.length-1][3]); //л


let names = ["Майк", "Дастин", "Лукас", "Макс"]
console.log(Array.isArray(names)); // true

let health   = 100;
console.log(Array.isArray(health)); //false