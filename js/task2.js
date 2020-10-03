const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];



const ingredientsEl = document.querySelector('#ingredients');
ingredients.forEach((ingredient) => {
  let item = document.createElement("li");
    item.textContent = ingredient;
    console.log(item);
 });
ingredientsEl.append(...ingredients);


// const potatoEl = document.createElement('li');
// console.log(potatoEl);
// potatoEl.textContent ='Картошка';

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//после чего вставит все li за одну операцию в список ul.ingredients.
//Для создания DOM - узлов используй document.createElement().