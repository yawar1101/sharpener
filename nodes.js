const itemList = document.querySelector('#items')

// parentNode

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'grey';

// console.log(itemList.parentNode.parentNode)

// parentElement

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'grey';

// console.log(itemList.parentElement.parentElement)

// childNode

// console.log(itemList.childNodes)
console.log(itemList.children)

// firstElementChild

console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello';

// lastElementChild

console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Bye';

// nextSibling

console.log(itemList.nextSibling);

// nextElementSibling

console.log(itemList.nextElementSibling);

// previousSibling

console.log(itemList.previousSibling);

// previousElementSibling

console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.textContent = 'HEllo';

// createElement

const newDiv = document.createElement('div');

newDiv.className = 'hello';

newDiv.id = 'he11';

newDiv.setAttribute('title', 'Some title');

const newDivText = document.createTextNode('HEllo');

newDiv.appendChild(newDivText);

const container = document.querySelector('header .container');
const h1 = document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv, h1);

const newItem = document.createElement('li');
newItem.className = 'list-group-item';
newItem.textContent = 'HEllo';

itemList.insertBefore(newItem, itemList.firstElementChild);