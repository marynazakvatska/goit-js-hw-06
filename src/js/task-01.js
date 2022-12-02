
const categories = document.querySelectorAll('li.item')
console.log("Number of categories: ", categories.length)

for (const category of categories) {
    const categoryName = category.querySelector('li.item h2').textContent
    const listElem = category.querySelectorAll("li")
    console.log("Category:", categoryName,
      "Elements: ",  listElem.length)
}





