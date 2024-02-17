const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.appendChild(deleteButton);
        list.appendChild(li);
        input.value = '';

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
        }
        );
    }else {
        alert('Please enter a favorite chapter.');
        
    }
    input.focus();
}
);


