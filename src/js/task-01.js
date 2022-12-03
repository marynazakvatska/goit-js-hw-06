
/* const categories = document.querySelectorAll('li.item')
console.log("Number of categories: ", categories.length)

for (const category of categories) {
    const categoryName = category.querySelector('li.item h2').textContent
    const listElem = category.querySelectorAll("li")
    console.log("Category:", categoryName,
      "Elements: ",  listElem.length)
}
 */



const list = document.getElementById('#categories')
console.log(list)
/* console.log(list.children) */

console.log("Number of categories: ", list.childElementCount)
console.log("Category:", list.firstElementChild.querySelector('h2').textContent, 
"Elements: ", list.firstElementChild.querySelectorAll('li').length)


console.log("Category:", list.firstElementChild.nextElementSibling.querySelector('h2').textContent, 
"Elements: ", list.firstElementChild.nextElementSibling.querySelectorAll('li').length)



console.log("Category:", list.lastElementChild.querySelector('h2').textContent, 
"Elements: ", list.lastElementChild.querySelectorAll('li').length)

