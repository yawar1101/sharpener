// const headTitle = document.getElementById('header-title');

// console.log(headTitle.innerText);

// headTitle.addEventListener('click', () => {
//     headTitle.innerText = 'Text changed';
// })

// // headTitle.innerHTML = '<h2>Hello</h2>'

// headTitle.style.borderBottom = 'solid 2px black';

// const h2Title = document.querySelector('.title');

// // console.log(h2Title.innerText);

// h2Title.style.fontWeight = 'bold';
// h2Title.style.color = 'green';

// const items = document.getElementsByClassName('list-group-item');
// console.dir(items);

// // const item = items[0];
// // console.log(item);

// items[2].style.backgroundColor = 'green';

// for (let item of items) {
//     // console.log(item.innerText);
//     item.style.fontWeight = 'bold';
// }

// const li = document.getElementsByTagName('li');
// console.log(li);

// const header = document.querySelector('#main-header');
// console.log(header);

// const input = document.querySelector('input');
// input.value = 'test';

// const secondItem = document.querySelector('.list-group-item:nth-child(2)');
// // console.log(secondItem);
// secondItem.style.backgroundColor = 'green';

// const lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.visibility = 'hidden';


// QuerySelectorALl

const items = document.querySelectorAll('.list-group-item');
if (items.length >= 2) {
    items[1].style.color = 'green';
}

const oddItems = document.querySelectorAll('.list-group-item:nth-child(odd)');
oddItems.forEach(item => {
    item.style.backgroundColor = 'green';
})