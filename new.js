const form = document.querySelector('#addForm');
// console.log(form);

const listItems = document.getElementById('items');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newItem = document.getElementById('item').value;

    // Create new li element

    const li = document.createElement('li');

    // Add class

    li.className = 'list-group-item';

    // Add text node with input value

    li.appendChild(document.createTextNode(newItem));

    // Delete button element
    const deleteBtn = document.createElement('button');

    // Add classes

    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node

    deleteBtn.appendChild(document.createTextNode('X'));

    // Append Button to li

    li.appendChild(deleteBtn);

    // Append li to list

    // Edit button

    const editButton = document.createElement('button');

    editButton.className = 'btn btn-danger btn-sm float-right edit';

    editButton.appendChild(document.createTextNode('EDIT'));

    li.appendChild(editButton);

    editButton.style.marginRight = '5px';

    listItems.appendChild(li);
})

listItems.addEventListener('click', (e) => {
    // console.log(1111);
    if (e.target.classList.contains('delete')) {
        // console.log(11111);
        if (confirm('Are you sure?')) {
            const li = e.target.parentElement;
            listItems.removeChild(li);
        }
    }
})