// Obtener referencias a elementos del DOM
const formulario = document.getElementById('registro-form'); // Formulario de registro
const nombreInput = document.getElementById('nombre'); // Campo de entrada para el nombre
const correoInput = document.getElementById('correo'); // Campo de entrada para el correo electrónico
const contrasenaInput = document.getElementById('contrasena'); // Campo de entrada para la contraseña
const confirmarContrasenaInput = document.getElementById('confirmar-contrasena'); // Campo de entrada para confirmar la contraseña
const contrasenaError = document.getElementById('contrasena-error'); // Elemento para mostrar mensajes de error relacionados con la contraseña
const confirmarContrasenaError = document.getElementById('confirmar-contrasena-error'); // Elemento para mostrar mensajes de error relacionados con la confirmación de la contraseña

// Agregar un evento de escucha para el envío del formulario
formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado de enviar el formulario

    // Obtener los valores de los campos de entrada y eliminar los espacios en blanco al principio y al final
    const nombre = nombreInput.value.trim();
    const correo = correoInput.value.trim();
    const contrasena = contrasenaInput.value.trim();
    const confirmarContrasena = confirmarContrasenaInput.value.trim();

    let valido = true; // Variable para indicar si el formulario es válido o no

    // Validar nombre
    if (nombre === '') {
        valido = false;
        nombreInput.classList.add('error'); // Agregar la clase 'error' para resaltar el campo de entrada
        nombreInput.nextElementSibling.textContent = 'El nombre es obligatorio'; // Mostrar mensaje de error
    } else {
        nombreInput.classList.remove('error'); // Eliminar la clase 'error' si el nombre es válido
        nombreInput.nextElementSibling.textContent = ''; // Borrar el mensaje de error si el nombre es válido
    }

    // Validar correo electrónico utilizando una expresión regular
    const regexCorreo = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regexCorreo.test(correo)) {
        valido = false;
        correoInput.classList.add('error');
        correoInput.nextElementSibling.textContent = 'Ingrese un correo electrónico válido';
    } else {
        correoInput.classList.remove('error');
        correoInput.nextElementSibling.textContent = '';
    }

    // Validar contraseña utilizando una expresión regular
    const regexContrasena = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\(\)\[\]\{\}\<\>\,\./\?\=\+\-])[A-Za-z0-9!@#\$%\^&\*\(\)\[\]\{\}\<\>\,\./\?\=\+\-]\S{5,}$/;
    if (!regexContrasena.test(contrasena)) {
        valido = false;
        contrasenaInput.classList.add('error');
        contrasenaError.textContent = 'La contraseña debe tener al menos 5 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial';
    } else {
        contrasenaInput.classList.remove('error');
        contrasenaError.textContent = '';
    }

    // Validar confirmación de contraseña
    if (contrasena !== confirmarContrasena) {
        valido = false;
        confirmarContrasenaInput.classList.add('error');
        confirmarContrasenaError.textContent = 'La contraseña y la confirmación no coinciden';
    } else {
        confirmarContrasenaInput.classList.remove('error');
        confirmarContrasenaError.textContent = '';
    }

    if (valido) {
        // Aquí iría el código para enviar el formulario al servidor (no implementado en este ejemplo)
        console.log('Formulario enviado correctamente');
        formulario.reset(); // Restablecer los campos del formulario después de enviarlo
    }
});
