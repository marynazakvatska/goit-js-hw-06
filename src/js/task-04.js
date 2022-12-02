/* Створи змінну counterValue, в якій буде зберігатися поточне 
значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або 
зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue. */
let counterValue = 0

const refs = {
    btnDecr: document.querySelector('button[data-action="decrement"]'),
    btnIncrem: document.querySelector('button[data-action="increment"]'),
    input : document.querySelector('#value')
}

refs.btnDecr.addEventListener("click", () => {  refs.input.textContent = counterValue -=1})
refs.btnIncrem.addEventListener('click', () => { refs.input.textContent = counterValue +=1})





