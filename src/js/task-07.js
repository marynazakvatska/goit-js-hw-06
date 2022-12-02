/* Напиши скрипт, який реагує на зміну 
значення input#font-size-control (подія input) 
і змінює інлайн-стиль span#text, оновлюючи 
властивість font-size. В результаті, перетягуючи
 п
овзунок, буде змінюватися розмір тексту.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span> */
const input = document.querySelector('#font-size-control')
const spanEl = document.querySelector('#text')
console.log(input);
input.addEventListener('input', onChangeStyle)

function onChangeStyle(event) {
    console.log(event.currentTarget.value)

    spanEl.style.fontSize = event.currentTarget.value + "px";
}


