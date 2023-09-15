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

let editMode = false;
let editKey = null;

userForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (editMode) {
        const userDetails = {
            name: name,
            email: email,
            phone: phone
        };
        localStorage.setItem(editKey, JSON.stringify(userDetails));
        editMode = false;
        editKey = null;
    } else {
        const timestamp = new Date().getTime();
        const userKey = `userDetails_${timestamp}`;
        const userDetails = {
            name: name,
            email: email,
            phone: phone
        };
        localStorage.setItem(userKey, JSON.stringify(userDetails));
    }

    displayUserData();

    alert(editMode ? 'User details have been updated in local storage.' : 'User details have been saved in local storage.');
});

    const displayUserData = () => {
        userDataDiv.innerHTML = '';
        for (let i = 0; i < localStorage.length; i++) {
            const userKey = localStorage.key(i);
            const userDetails = JSON.parse(localStorage.getItem(userKey));

            const userContainer = document.createElement('div');
            userContainer.classList.add('user-container');

            const nameParagraph = document.createElement('p');
            nameParagraph.textContent = `Name: ${userDetails.name}`;

            const emailParagraph = document.createElement('p');
            emailParagraph.textContent = `Email: ${userDetails.email}`;

            const phoneParagraph = document.createElement('p');
            phoneParagraph.textContent = `Phone: ${userDetails.phone}`;
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.classList.add('btn', 'btn-warning', 'edit-button');

            editButton.addEventListener('click', function() {
                editMode = true;
                editKey = userKey;
                const { name, email, phone } = userDetails;
                document.getElementById('name').value = name;
                document.getElementById('email').value = email;
                document.getElementById('phone').value = phone;
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('btn', 'btn-danger', 'delete-button');
            
            deleteButton.addEventListener('click', function() {

                localStorage.removeItem(userKey);

                displayUserData();
            });

            userContainer.appendChild(nameParagraph);
            userContainer.appendChild(emailParagraph);
            userContainer.appendChild(phoneParagraph);
            userContainer.appendChild(editButton);
            userContainer.appendChild(deleteButton);

            userDataDiv.appendChild(userContainer);
        }
    }

    // Initial call to display user data when the page loads
    displayUserData();


//     const timestamp = new Date().getTime();
//     const userKey = `userDetails_${timestamp}`;

//     const userDetails = {
//         name: name,
//         email: email,
//         phone: phone,
//     };

//     localStorage.setItem(userKey, JSON.stringify(userDetails));

//     const userContainer = document.createElement('div');
//     userContainer.classList.add('user-container');

//     const nameParagraph = document.createElement('p');
//     nameParagraph.textContent = `Name: ${userDetails.name}`;

//     const emailParagraph = document.createElement('p');
//     emailParagraph.textContent = `Email: ${userDetails.email}`;

//     const ageParagraph = document.createElement('p');
//     ageParagraph.textContent = `Age: ${userDetails.age}`;

//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Delete';
//     deleteButton.classList.add('btn', 'btn-danger', 'delete-button');

//     deleteButton.addEventListener('click', () => {
//         localStorage.removeItem(userKey);

//         userDataDiv.removeChild(userContainer);
//     });

//     userContainer.appendChild(nameParagraph);
//     userContainer.appendChild(emailParagraph);
//     userContainer.appendChild(ageParagraph);
//     userContainer.appendChild(deleteButton);

//     userDataDiv.appendChild(userContainer);

//     alert('User details have been saved in local storage.');
// });
