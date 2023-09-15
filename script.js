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
const userDataDiv = document.getElementById('user-data');

userForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const timestamp = new Date().getTime();
    const userKey = `userDetails_${timestamp}`;

    const userDetails = {
        name: name,
        email: email,
        phone: phone
    };

    localStorage.setItem(userKey, JSON.stringify(userDetails));

    const nameParagraph = document.createElement('p');
    nameParagraph.textContent = `Name: ${userDetails.name}`;

    const emailParagraph = document.createElement('p');
    emailParagraph.textContent = `Email: ${userDetails.email}`;

    const ageParagraph = document.createElement('p');
    ageParagraph.textContent = `Age: ${userDetails.age}`;

    userDataDiv.appendChild(nameParagraph);
    userDataDiv.appendChild(emailParagraph);
    userDataDiv.appendChild(ageParagraph);



    alert('User details have been saved in local storage.');
});