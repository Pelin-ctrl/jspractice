let items = ['Меч', 'Свиток', 'Жезл'];
let items_2 = ['Молоко', 'Курица', 'Масло'];

let allItems = items.concat(items_2);
console.log(allItems);

let items_3 = ['Печенка'];
let allItems_3 = items_3.concat('Картошка');
console.log(allItems_3);

let itemsFo = [].concat(['Печенка', 'Дуриан']).concat(['Арбуз']);
console.log(itemsFo);