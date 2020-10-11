const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const spanEl = document.querySelector('#value');
let counterValue = 0;

// incrementBtn.addEventListener("click", (counterValue) => {
//     ++spanEl.textContent;
    
// });

// decrementBtn.addEventListener("click", (counterValue) => {
//     --spanEl.textContent;
// });

incrementBtn.addEventListener("click", (increment));
function increment(counterValue) {
     ++spanEl.textContent;
}

decrementBtn.addEventListener("click", (decrement));
function decrement(counterValue) {
  --spanEl.textContent;
}










//из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса