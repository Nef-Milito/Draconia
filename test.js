//Variables and Arrays

let words = []

let saveBtn = document.getElementById('save');
let text = document.getElementById('textarea');
let wordBoard = document.getElementById('board');
let resetBtn = document.getElementById('reset');

//Capture User input.

text.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('save').click();
    }
});

saveBtn.onclick = () => {
    text = document.getElementById('textarea').value;
    words.push(text);
    let table = document.createElement('div');
    board.appendChild(table);
    table.className = 'table';
    table.id = 'table';
    table.innerHTML =
        `<p>${text}</p>`

    const inputs = document.querySelectorAll('#textarea');

    inputs.forEach(input => {
        input.value = "";
    })

    resetBtn.onclick = () => {
        words = [];
        const tables = document.querySelectorAll('#table');
        tables.forEach(table => {
            board.removeChild(table);
        })
    }
}

resetBtn.onclick = () => {
    words = [];
    document.removeChild(table);
}