// const btn = document.querySelector('button');

// console.log(btn);

// btn.addEventListener('submit', (e) => {

//     console.log('COMING');
//     e.preventDefault();

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phome').value;

//     const userDetails = {
//         name: name,
//         email: email,
//         phone: phone,
//     };

//     localStorage.setItem('userDetails', JSON.stringify(userDetails));

//     alert('Details have been saved to local storage');
// });


const userForm = document.getElementById('userForm');

userForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const userDetails = {
        name: name,
        email: email,
        phone: phone
    };

    localStorage.setItem('userDetails', JSON.stringify(userDetails));



    alert('User details have been saved in local storage.');
});
