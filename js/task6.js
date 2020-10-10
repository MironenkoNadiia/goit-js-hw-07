const validationInput = document.querySelector("#validation-input");
console.log(validationInput);
validationInput.addEventListener('focus', () => {
    validationInput.classList = '';
});



const validationInputLengthCheck = function () {
    if (validationInput.value.length == validationInput.dataset.length) {
        validationInput.classList.remove("invalid");
        validationInput.classList.add("valid");
    } else {
        validationInput.classList.remove("valid");
        validationInput.classList.add("invalid")
    }
     
};
validationInput.addEventListener("blur", validationInputLengthCheck);






//Напиши скрипт, который бы при потере фокуса на инпуте,
//проверял его содержимое на правильное количество символов.

//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
//Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
