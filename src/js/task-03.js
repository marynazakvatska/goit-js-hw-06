
/* Напиши скрипт для створення галереї зображень на підставі масиву даних.
 HTML містить список ul.gallery.

<ul class="gallery"></ul>

  Використовуй масив об'єктів images для створення елементів <img>, 
вкладених в < li >.Для створення розмітки використовуй шаблонні рядки 
і метод insertAdjacentHTML().

Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи. */

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listEl = document.querySelector("ul.gallery")
 listEl.classList.add("gallery")
console.log(listEl)

const makeItemElMarkup = images => {
  const { url, alt } = images;

  return `
  <li class="gallery__item ">
<img class="img" src = ${url} alt =${alt} width=640></img>
  <li>
  `

}

const makeImagesRow = images.map(makeItemElMarkup).join('')
console.log(makeImagesRow)
listEl.insertAdjacentHTML('beforeend', makeImagesRow)





/* const listEl = document.querySelector("ul.gallery")
console.log(listEl)

const imagesList = images.map(image => {
  const itemEl = document.createElement('li')
  const imageEl = document.createElement('img')
  imageEl.src = image.url;
  imageEl.alt = image.alt;
  imageEl.width = 640;
  console.log(imageEl)
  itemEl.append(imageEl)
  return itemEl
})
listEl.append(...imagesList) */


