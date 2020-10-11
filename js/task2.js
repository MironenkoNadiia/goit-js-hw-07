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
  const item = document.createElement("li");
  console.log(item);
  item.append(ingredient);

  ingredientsEl.append(item);
 });
  



// const potatoEl = document.createElement('li');
// console.log(potatoEl);
// potatoEl.textContent ='Картошка';

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//после чего вставит все li за одну операцию в список ul.ingredients.
//Для создания DOM - узлов используй document.createElement().