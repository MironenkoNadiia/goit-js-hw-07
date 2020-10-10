const inputEl = document.querySelector("#font-size-control");
inputEl.addEventListener("input", onInput);
function onInput() {
  const size = inputEl.value;
  document.body.style.fontSize = size + "px";
}






// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет инлайн - стиль
// span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.