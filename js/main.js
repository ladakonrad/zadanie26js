let zmiennaParagraf;

zmiennaParagraf = document.getElementById('opis');

function addText () {
    zmiennaParagraf.innerHTML = 'Akademia108';
}

let zmiennaButton;

zmiennaButton = document.querySelector('button').onclick = addText;