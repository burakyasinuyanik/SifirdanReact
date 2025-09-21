document.title = "JS -> ES6+"

console.log(
  document.getElementsByTagName('h1')[0].innerHTML
)

console.log(
  document.getElementsByClassName('text-primary')
)

const h1Element = document.querySelector('h1')
const firstTitleClass = document.querySelector('.title')
const titleId = document.querySelector('#title')

console.log(h1Element.innerHTML)
console.log(firstTitleClass.innerHTML)
console.log(titleId.innerHTML)

const appElement = document.querySelector('#app')
appElement.innerHTML = "<h2>React App Buraya Eklendi</h2>"

const spanElement = document.querySelector('#info>p>span')
console.log(spanElement)

const listItems = document.querySelectorAll('li.list-item')
console.log(listItems)