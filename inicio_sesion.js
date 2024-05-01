const formulario = document.getElementById('login-form');
const correoInput = document.getElementById('correo');
const contrasenaInput = document.getElementById('contrasena');
const correoError = document.getElementById('correo-error');
const contrasenaError = document.getElementById('contrasena-error');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const correo = correoInput.value.trim();
    const contrasena = contrasenaInput.value.trim();

    let valido = true;

    // Validar correo electrónico
    const regexCorreo = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regexCorreo.test(correo)) {
        valido = false;
        correoInput.classList.add('error');
        correoError.textContent = 'Ingrese un correo electrónico válido';
    } else {
        correoInput.classList.remove('error');
        correoError.textContent = '';
    }

    // Validar contraseña
    // (Implementar validación de contraseña aquí)

    if (valido) {
        // Enviar formulario al servidor (código no implementado)
        console.log('Formulario enviado correctamente');
        // Redireccionar a la página principal del sistema
        // window.location.href = 'sistema-principal.html';
    }
});
