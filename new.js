const form = document.querySelector('#addForm');
// console.log(form);

const listItems = document.getElementById('items');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newItem = document.getElementById('item').value;
    const newDesc = document.getElementById('description').value;

    // Create new li element

    const li = document.createElement('li');

    // Add class

    li.className = 'list-group-item';

    // Add text node with input value

    const itemText = newItem + ' ' + newDesc;

    li.appendChild(document.createTextNode(itemText));

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

const filter = document.getElementById('filter');

// console.log(filter);

filter.addEventListener('keyup', (e) => {
    // console.log('HI');
    const text = e.target.value.toLowerCase();
    console.log(text);

    // Get Li's
    const items = listItems.getElementsByTagName('li');
    // console.log(items);

    // Convert to an array

    Array.from(items).forEach((item) => {
        const itemName = item.firstChild.textContent.toLocaleLowerCase();
        const itemDesc = item.firstChild.nextSibling.textContent.toLowerCase();
        // console.log(itemName);
        if (itemName.indexOf(text) != -1 || itemDesc.indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none'
        }
    })
})