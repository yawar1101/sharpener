const headTitle = document.getElementById('header-title');


console.log(headTitle.innerText);



headTitle.addEventListener('click', () => {
    headTitle.innerText = 'Text changed';
})

// headTitle.innerHTML = '<h2>Hello</h2>'

headTitle.style.borderBottom = 'solid 2px black';

const h2Title = document.querySelector('.title');

// console.log(h2Title.innerText);

h2Title.style.fontWeight = 'bold';
h2Title.style.color = 'green';


