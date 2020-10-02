
const itemsEl = document.querySelectorAll('li.item');
const quantity = itemsEl.length;
console.log(quantity);
console.log(`В списке ${quantity} категории`);

for (const itemEl of itemsEl) {
    console.log('Категория: ',itemEl.firstElementChild.textContent);
    console.log('Количество элементов: ' ,itemEl.lastElementChild.children.length);
}