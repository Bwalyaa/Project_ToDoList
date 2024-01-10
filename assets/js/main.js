const div = document.querySelector(".div");
const input = document.querySelector("#input");
const toDos = document.getElementById("toDos");

function addToDo() {
    const inputValue = input.value;

    if (inputValue === '') {
        return;
    }

    const toDo = document.createElement('li');
    toDo.innerHTML = `
        <input type="checkbox">
        <p>${inputValue}</p>
        <button type="button">❌</button>
    `;

    toDo.querySelector('input[type="checkbox"]').
        addEventListener('change', taskDone);

    toDo.querySelector('button').addEventListener
    ('click', removeToDo);

    toDos.appendChild(toDo);
    input.value = '';
}

function taskDone(el) {
    const toDo = el.target.parentNode;
    toDo.querySelector('p').classList.toggle('done');
}

function removeToDo(el) {
    const toDo = el.target.parentNode;
    toDos.removeChild(toDo);
}

