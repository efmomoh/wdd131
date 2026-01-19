// references to HTML elements
const input = document.querySelector('#favchap');
const button = document.querySelector('#add-button');
const list = document.querySelector('#list');


// add chapter
button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');

        li.appendChild(deleteButton);
        list.appendChild(li);

        input.value = '';
        input.focus();
    }
});

// EVENT DELEGATION for delete buttons
list.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
        const li = event.target.parentElement;
        list.removeChild(li);
        input.focus();
    }
});
