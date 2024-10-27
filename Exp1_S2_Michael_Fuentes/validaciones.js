document.getElementById('formulario-registro').addEventListener('submit', function(event) {
    const clave = document.getElementById('clave').value;
    const repetirClave = document.getElementById('repetir-clave').value;
    const fechaNacimiento = new Date(document.getElementById('fecha-nacimiento').value);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    if (clave !== repetirClave) {
        alert('Las contraseñas no coinciden.');
        event.preventDefault();
        return;
    }

    if (!/(?=.*[0-9])(?=.*[A-Z])/.test(clave) || clave.length < 6 || clave.length > 18) {
        alert('La contraseña debe contener al menos un número, una letra mayúscula y tener entre 6 y 18 caracteres.');
        event.preventDefault();
        return;
    }

    if (edad < 13) {
        alert('Debes tener al menos 13 años para registrarte.');
        event.preventDefault();
        return;
    }
});
