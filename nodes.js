const h1 = document.querySelector('#header-title');

const header = document.querySelector('#main-header');

// innerText consider styling

// console.log(h1.textContent);

header.style.borderBottom = '4px solid black';

// const ul = document.querySelector('#items');

// const items = document.querySelectorAll('.list-group-item');
// for (let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'grey';
// }

// items[1].textContent = 'Yawar';
// items[2].style.fontWeight = 'bold';
// items[3].style.backgroundColor = 'Cyan';

// const input = document.querySelector('input');
// input.value = 'Yawar';

// const item = document.querySelector('.list-group-item');
// console.log(item);
// item.style.color = 'violet';

// const secondItem = document.querySelector('.list-group-item:nth-child(2)')
// console.log(secondItem);
// secondItem.style.color = 'indigo';

// const thirdItem = document.querySelector('.list-group-item:nth-child(3)')
// console.log(thirdItem);
// thirdItem.style.color = 'blue';

// const fourthItem= document.querySelector('.list-group-item:nth-child(4)')
// console.log(fourthItem);
// fourthItem.style.color = 'green';

// Traversing the DOM

const items = document.querySelector('#items');
// console.log(items.parentNode)
// items.parentNode.style.backgroundColor = 'grey';
// console.log(items.parentNode.parentNode)

// ChildNodes
// console.log(items.childNodes);

// Pro Tip - don't use childNodes property

// children property

// console.log(items.children)
// items.children[1].style.backgroundColor = 'blue';

items.firstElementChild.textContent = 'Updated text';

items.lastElementChild.textContent = 'Last element updated';

// Next Sibling

// console.log(items.nextSibling);

// Next Element Sibling

// console.log(items.nextElementSibling);

// console.log(items.previousElementSibling);
items.previousElementSibling.style.color = 'green';

// Create element

const newDiv = document.createElement('div');

newDiv.className = 'hello';
newDiv.id = 'hello1';

// Create text node
const newDivText = document.createTextNode('Inside div');

// Add text to div
newDiv.appendChild(newDivText);

const container = document.querySelector('header .container');
const mainHeader = document.querySelector('header h1');
// container.appendChild(newDiv);

container.insertBefore(newDiv, mainHeader);

// newDiv.style.fontSize = '30px';

// console.log(newDiv);

const button = document.querySelector('#button');

button.addEventListener('click', () => {
    // console.log('HIIIIEIEIIEEIIE');
    document.getElementById('header-title').textContent = 'New title';
});

const box = document.getElementById('box');
console.log(box);

// box.addEventListener('mouseenter', (e) => {
//     console.log('Event Type', e.type);
// })

// box.addEventListener('mouseover', (e) => {
//     console.log('Event Type', e.type);
// })

box.addEventListener('mousemove', (e) => {
    // console.log('Event Type', e.type);
    // console.log(e.clientX);
    // output.innerHTML =
    //     '<h3>MouseX: ' + e.offsetX + ' </h3><h3>MouseY: ' + e.offsetY + '</h3>';
    box.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+', 40)';
});

// box.addEventListener('mouseout', (e) => {
//     console.log('Event Type', e.type);
// })


const itemInput = document.querySelector('input[type=text]');
// console.log(itemInput);
const form = document.querySelector('form');
// console.log(form);

itemInput.addEventListener('keydown', (e) => {
    // console.log(e.type);
    console.log(e.target.value);
})