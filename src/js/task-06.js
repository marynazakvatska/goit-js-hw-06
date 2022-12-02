/* Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
перевіряє його вміст щодо правильної кількості введених символів.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>



Яка кількість символів повинна бути в інпуті, зазначається в його 
атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає 
зеленим, якщо неправильна кількість - червоним.

*/
/* #validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}  */
const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', onInputBlur)

function onInputBlur(event) {
  console.log(Number(inputEl.dataset.length))
  console.log(event.currentTarget.value.length);

 inputEl.classList.add('invalid') 
    if (event.currentTarget.value.length === Number(inputEl.dataset.length) ) {
     inputEl.classList.replace('invalid', 'valid') 
       
    } 
}

