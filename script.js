const button = document.querySelector('.botonMas');
button.addEventListener('click', function(event) {
    event.preventDefault();
    addArt();
})

function addArt() {
    window.location.href = 'addArticulos.html';
}