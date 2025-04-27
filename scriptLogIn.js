const USUARIO = "valen";
const CONTRA = "1234";

document.getElementById("cajaForm").addEventListener('submit', function(event) {
    event.preventDefault();
    logIn();
})

function logIn() {
    const usuario = document.getElementById("input").value;
    const contra = document.getElementById("contra").value;
    const mensajeError = document.getElementById("mensajeError");
    const cajaLogin = document.getElementById("cajaLogin");

    mensajeError.style.display = "none";

    if (usuario !== USUARIO || contra !== CONTRA) {
        mensajeError.style.display = "flex";
        mensajeError.textContent = "Usuario o contraseña incorrectos";
        mensajeError.style.backgroundColor = "#e74c3c";
        mensajeError.style.padding = "20px"
        mensajeError.style.borderRadius = "10px"
        cajaLogin.style.height = "520px"

        setTimeout( function() {
            mensajeError.style.display = "none";
            mensajeError.textContent = '';
            cajaLogin.style.height = "450px";
        }, 3000)

    } else {
        mensajeError.style.display = "flex";
        mensajeError.textContent = "¡Inicio de sesión exitoso!";
        mensajeError.style.backgroundColor = "#8BC34A";
        mensajeError.style.padding = "20px";
        mensajeError.style.borderRadius = "10px";
        cajaLogin.style.height = "520px";

        setTimeout( function() {
            window.location.href = 'index.html';
            mensajeError.style.opacity = "0";
        }, 1000)
    }
}