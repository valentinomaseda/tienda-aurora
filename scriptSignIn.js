const form = document.querySelector(".cajaForm");

form.addEventListener('submit', function(event) {
    const nombre = document.querySelector('.inputNombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const nombreUsu = document.getElementById('nombreUsu').value;
    const contra = document.getElementById('contra').value;

    if (nombre !== '' && apellido !== '' && email !== '' && nombreUsu !== '' && contra !== '') {
        setTimeout (function() {
        window.location.href = 'index.html';
        }, 1000)

    } else {
        const mensajeError = document.getElementById('mensajeError');
        mensajeError.textContent = "Es necesario llenar todos los datos";
        mensajeError.style.backgroundColor = "#e74c3c";
        mensajeError.style.padding = "20px";
        mensajeError.style.borderRadius = "10px";
        mensajeError.style.position = "fixed";
        mensajeError.style.bottom = "20px";
        mensajeError.style.right = "20px";
        mensajeError.style.boxShadow = "0 0 15px black";
        mensajeError.style.zIndex = "9999";
    }

    event.preventDefault();
})