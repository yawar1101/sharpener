// // // // const form = document.getElementById('my-form')

// // // // form.addEventListener('submit', (e) => {
// // // //     e.preventDefault();
// // // //     const name = document.getElementById('name').value;
// // // //     const email = document.getElementById('email').value;
// // // //     const phone = document.getElementById('phone').value;

// // // //     const formData = {
// // // //         name: name,
// // // //         email: email,
// // // //         phone: phone
// // // //     };

// // // //     console.log(formData);
// // // // })

// // // let a = 10;
// // // let b = 20;

// // // console.log('Before Swapping')

// // // console.log(`Value of a - ${a} and Value of b - ${b}`);

// // // let temp = a;
// // // a = b;
// // // b = temp;

// // // console.log('After Swapping');

// // // console.log(`Value of a - ${a} and Value of b - ${b}`);

// // const secondMax = (arr) => {
// //     let maxi = arr[0];
// //     for (let i = 0; i < arr.length; i++) {
// //         if (arr[i] > maxi) {
// //             maxi = arr[i];
// //         }
// //     }

// //     let secondMaxi = arr[0];

// //     for (let i = 0; i < arr.length; i++) {
// //         if (arr[i] > secondMaxi && arr[i] !== maxi) {
// //             secondMaxi = arr[i];
// //         }
// //     }

// //     return secondMaxi;
// // };

// // arr = [1, 2, 4, 1, 5, 6];

// // console.log(secondMax(arr));


// // const isValid = (s) => {
// //     const stack = []
// //     const hash_map = {
// //         '(': ')',
// //         '[': ']',
// //         '{': '}'
// //     };

// //     for (let i = 0; i < s.length; i++) {
// //         const c = s.charAt(i);
// //         if (hash_map[c]) {
// //             stack.push(c);
// //         } else {
// //             const top = stack.pop();

// //             if (!top || hash_map[top] !== c) {
// //                 return false;
// //             }
// //         }
// //     }

// //     return stack.length === 0;
// // }



// // s = '(['
// // console.log(isValid(s));

// // const form = document.getElementById('my-form');
// // const h1 = document.querySelector('h1');

// // console.log(form);
// // console.log(h1);

// // const ul = document.getElementById('some');
// // ul.style.color = 'Green';
// // console.log(ul);

// // const ul = document.querySelector('.items');
// // const firstLi = ul.firstElementChild

// // firstLi.style.color = 'green';

// // const secondLi = ul.children[1];
// // secondLi.style.color = 'yellow';

// const button = document.querySelector('.btn');

// // button.addEventListener('click', (e) => {
// //     e.preventDefault();
// //     console.log('CLICKED');
// // })

// const mouse = document.getElementById('mouse');

// mouse.addEventListener('mouseover', () => {
//     mouse.style.color = 'blue';
// })

// mouse.addEventListener('mouseout', () => {
//     mouse.style.color = 'black';
// })

// const name = document.getElementById('name').value;
// const email = document.getElementById('email').value;
// const phone = document.getElementById('phone').value;

// button.addEventListener('click', (e) => {

//     e.preventDefault();
    
//     if (name == '') {
//         alert('please enter your name');
//         return;
//     }
//     else if (email === '') {
//         alert('Please enter your email.');
//         return;
//     }
//     else if (phone === '') {
//         alert('Please enter your phone number.');
//         return;
//     }
//     else {
//         console.log(name);
//         console.log(email);
//         console.log(phone);
//     }
// })


console.log('Hello, git');